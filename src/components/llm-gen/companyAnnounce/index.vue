<template>
  <div class="w-full flex flex-col"> <!-- 移除了gap-4 -->
    <div class="mb-1 radio-container" ref="radioContainerRef">
      <el-radio-group 
        v-model="selectedTabId" 
        class="radio-button-group" 
        @change="handleTabChange"
      >
        <el-radio-button
          v-for="tab in tabs"
          :key="tab.id"
          :label="tab.id"
          :ref="el => setRadioButtonRef(el, tab.id)"
        >
          {{ tab.title }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="w-full h-[400px]" ref="timelineRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import axios from 'axios';
import { processUrl, processParams } from '@/common/utils/params-processor';

interface Props {
  params: {
    apis: Array<{
      method: string;
      isFirstScreen: boolean;
      alis: string;
      url: string;
      params: Record<string, any>;
    }>;
    token?: string;
    hook?: Function;
    amisConfig?: {
      view: Array<any>;
      tabs: Array<any>;
      [key: string]: any;
    };
    [key: string]: any;
  };
  data?: {
    timeline?: any;
  };
}

const props = defineProps<Props>();

const tabs = ref([
  { title: "全部公告", id: "all" },
  { title: "业绩公告", id: "eq-f1001" },
  { title: "重大事项", id: "eq-f1002" },
  { title: "股份变动公告", id: "eq-f1003" },
  { title: "决议公告", id: "eq-f1004" }
]);

const timelineRef = ref<HTMLElement | null>(null);
const selectedTabId = ref(tabs.value[0].id);
const timelineData = ref<any>(null);
const loading = ref(false);
const isFirstRender = ref(true);

const radioContainerRef = ref<HTMLElement | null>(null);
const radioButtonRefs = ref<Map<string, HTMLElement>>(new Map());

const fetchTimelineData = async (): Promise<boolean> => {
  if (isFirstRender.value && props.data && props.data.timeline) {
    const rawFirstScreenData = props.data.timeline;

    let extractedData = null;
    if (rawFirstScreenData.data && rawFirstScreenData.data.data && rawFirstScreenData.data.input) {
        extractedData = rawFirstScreenData.data;
    } else if (rawFirstScreenData.data && rawFirstScreenData.input) {
        extractedData = rawFirstScreenData;
    }

    if (extractedData) {
        timelineData.value = extractedData;
        isFirstRender.value = false;
        return true;
    }
  }

  loading.value = true;
  try {
    const timelineApi = props.params.apis.find(api => api.alis === 'timeLine');
    if (!timelineApi) {
      return false;
    }

    const url = processUrl(timelineApi.url);
    const method = timelineApi.method.toLowerCase();
    
    const rawParams = timelineApi.params || {};
    const processedParams = processParams(rawParams);

    const paramsToSend = {
      ...processedParams,
      extensions: {
        ...(processedParams.extensions || {}),
        classify: selectedTabId.value
      }
    };

    const response = await axios({
      method,
      url,
      params: method === 'get' ? paramsToSend : undefined,
      data: method !== 'get' ? paramsToSend : undefined
    });
    
    if (response.data && response.data.data) {
        timelineData.value = response.data.data;
        return true;
    } else {
        timelineData.value = null;
        return false;
    }

  } catch (error) {
    timelineData.value = null;
    return false;
  } finally {
    loading.value = false;
  }
};

const renderTimeline = () => {
  if (!timelineRef.value || !timelineData.value || !timelineData.value.data || !timelineData.value.input) {
      return;
  }

  if (!window.AIGCDataVis || typeof window.AIGCDataVis.render !== 'function') {
      return;
  }

  nextTick(() => {
    if (timelineRef.value) {
      timelineRef.value.innerHTML = '';

      if (!props.params.amisConfig || !props.params.amisConfig.view || props.params.amisConfig.view.length === 0) {
          return;
      }

      const tempParams = {
        ...props.params,
        data: [{
          metadata: timelineData.value.input,
          values: timelineData.value.data
        }],
        view: props.params.amisConfig.view?.[0]
      };

      window.AIGCDataVis.render(timelineRef.value, tempParams);
    }
  });
};

const handleTabChange = async () => {
  const dataFetched = await fetchTimelineData();
  if (dataFetched) {
      await nextTick();
      renderTimeline();
      nextTick(() => scrollToCenter(selectedTabId.value));
  }
};

watch(timelineData, (newValue) => {
  if (newValue && newValue.data && newValue.input) {
    renderTimeline();
  } else if (newValue === null) {
    if (timelineRef.value) {
      timelineRef.value.innerHTML = '';
    }
  }
}, { deep: true, immediate: false });

onMounted(async () => {
  await fetchTimelineData();
  nextTick(() => {
    if (selectedTabId.value) {
      scrollToCenter(selectedTabId.value);
    }
  });
});

const setRadioButtonRef = (el: any, id: string) => {
  if (el && el.$el) {
    radioButtonRefs.value.set(id, el.$el as HTMLElement);
  } else if (el) {
    radioButtonRefs.value.set(id, el as HTMLElement);
  } else {
    radioButtonRefs.value.delete(id);
  }
};

const scrollToCenter = (selectedId: string) => {
  const container = radioContainerRef.value;
  const selectedElement = radioButtonRefs.value.get(selectedId);
  
  if (!container || !selectedElement) return;
  
  const containerRect = container.getBoundingClientRect();
  const elementRect = selectedElement.getBoundingClientRect();
  
  const elementLeft = elementRect.left - containerRect.left + container.scrollLeft;
  const elementWidth = elementRect.width;
  const containerWidth = containerRect.width;
  
  const targetScrollLeft = elementLeft - (containerWidth - elementWidth) / 2;
  
  container.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: 'smooth'
  });
};

watch(tabs, () => {
  if (tabs.value.length > 0 && !selectedTabId.value) {
    selectedTabId.value = tabs.value[0].id;
  }
  nextTick(() => {
    if (selectedTabId.value) {
      scrollToCenter(selectedTabId.value);
    }
  });
}, { deep: true });
</script>

<style scoped>
.radio-container {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: var(--atom-tabs-wrapper-background);
  border-radius: 4px;
  padding: 4px;
  scroll-behavior: smooth;
}

.radio-container::-webkit-scrollbar {
  display: none;
}

.radio-button-group {
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  min-width: max-content;
}

.radio-button-group :deep(.el-radio-button__inner) {
  padding: 8px 10px;
  border-radius: 4px;
  margin: 1px 4px;
  font-size: var(--atom-tabs-block-font-size);
  height: var(--atom-tabs-block-height);
  line-height: calc(var(--atom-tabs-block-height) - 16px);
  white-space: nowrap;
  background-color: var(--atom-tabs-block-plain-background-color);
  border: 1px solid var(--atom-tabs-block-plain-border-color);
  color: var(--atom-tabs-block-color);
  transition: all 0.2s ease;
  box-shadow: none;
}

.radio-button-group :deep(.el-radio-button__inner:hover) {
  background: var(--atom-tabs-block-plain-hover-background-color);
}

.radio-button-group :deep(.el-radio-button:first-child .el-radio-button__inner) {
  margin: 1px 4px 1px 0;
}

.radio-button-group :deep(.el-radio-button:last-child .el-radio-button__inner) {
  margin: 1px 0 1px 4px;
}

.radio-button-group :deep(.el-radio-button.is-active .el-radio-button__inner) {
  background-color: var(--atom-tabs-block-plain-active-background-color);
  color: var(--atom-tabs-block-plain-active-color);
  border: var(--atom-tabs-block-plain-border);
}

/* 覆盖默认的box-shadow样式 */
.radio-button-group :deep(.el-radio-button.is-active .el-radio-button__original-radio:not(:disabled)+.el-radio-button__inner) {
  box-shadow: none;
}

.radio-button-group :deep(.el-radio-button.is-active .el-radio-button__inner:hover) {
  background: var(--atom-tabs-block-plain-active-background-color);
}

:global(.dark) .radio-button-group :deep(.el-radio-button__inner:hover) {
  background: var(--atom-tabs-block-plain-hover-background-color);
}

:global(.dark) .radio-button-group :deep(.el-radio-button.is-active .el-radio-button__inner:hover) {
  background: var(--atom-tabs-block-plain-active-background-color);
}
</style>    