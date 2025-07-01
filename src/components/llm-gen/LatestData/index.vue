<template>
  <div class="w-full flex flex-col gap-4">
    <!-- Tab切换组件 -->
    <div>
      <el-radio-group v-model="selectedTabIndex" @change="handleTabChange">
        <el-radio-button 
          v-for="(tab, index) in tabs" 
          :key="index" 
          :label="index"
          size="small"
        >{{ tab.name }}</el-radio-button>
      </el-radio-group>
    </div>
    
    <!-- 表格可视化组件 -->
    <div class="w-full h-auto" ref="tableRef"></div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, watch, nextTick } from 'vue';
import axios from 'axios';
import { processUrl, processParams } from '@/common/utils/params-processor';

interface Tab {
  name: string;
  config_id: string;
}

interface Props {
  params: {
    apis: Array<{
      method: string;
      isFirstScreen: boolean;
      alis: string;
      url: string;
      params: Record<string, any>;
      depends?: string[];
    }>;
    token?: string;
    hook?: Function;
    view?: any[];
    [key: string]: any;
  };
  data?: any;
}

const props = defineProps<Props>();

// 响应式数据
const tableRef = ref<HTMLElement | null>(null);
const tableData = ref<any>(null);
const loading = ref(false);
const isFirstRender = ref(true);
const selectedTabIndex = ref(0);
const tabs = ref<Tab[]>([]);

// 初始化tabs数据
const initTabs = () => {
  console.log("props.params",props.params);
  if (props.params.amisConfig?.tabs) {
    tabs.value = props.params.amisConfig.tabs;
  }
};

// 处理表格数据
const processTableData = (data: any) => {
  if (!data || !data.input || !data.input.attribute_description) {
    return data;
  }
  
  // 修改所有字段的 attribute_type 和 attribute_unit
  data.input.attribute_description = data.input.attribute_description.map((attr: any) => ({
    ...attr,
    attribute_type: "STR",
    attribute_unit: ""
  }));
  
  return data;
};

// 获取表格数据
const fetchTableData = async () => {
  // 如果外部传入了首屏数据，直接使用
  if (isFirstRender.value && props.data && props.data.table) {
    tableData.value = processTableData(props.data.table);
    isFirstRender.value = false;
    return;
  }

  loading.value = true;
  try {
    const api = props.params.apis.find(api => api.alis === 'table');
    if (!api) return;

    const url = processUrl(api.url);
    const method = api.method.toLowerCase();
    
    // 构建API数据，包含tabs数据和当前选中的tab
    const apiData = {
      tabs: tabs.value,
      selectedTab: tabs.value[selectedTabIndex.value]
    };
    
    // 处理依赖参数
    const params = processParams(api.params, apiData);
    
    // 更新config_id为当前选中tab的config_id
    if (params.config_id) {
      params.config_id = apiData.selectedTab.config_id;
    }
    
    const response = await axios({
      method,
      url,
      params: method === 'get' ? params : undefined,
      data: method !== 'get' ? params : undefined
    });
    tableData.value = processTableData(response.data.data);
  } catch (error) {
    console.error('获取表格数据失败:', error);
  } finally {
    loading.value = false;
  }
};

// 渲染表格
const renderTable = () => {
  if (!tableRef.value || !tableData.value) return;
  console.log("tabledata.value",tableData.value);

  nextTick(() => {
    try {
      if (tableRef.value) {
        const tableParams = {
          ...props.params,
          data: [{
            metadata: tableData.value.input,
            values: tableData.value.data
          }],
          // view: props.params.view // 使用第一个视图配置
        };
        console.log("tableParams",tableParams);
        window.AIGCDataVis.render(tableRef.value, tableParams);
      }
    } catch (error) {
      console.error('渲染表格失败:', error);
    }
  });
};

// 处理tab切换
const handleTabChange = async (val: string | number | boolean | undefined) => {
  if (typeof val === 'number') {
    selectedTabIndex.value = val;
    await fetchTableData();
    renderTable();
  }
};

// 生命周期
onMounted(async () => {
  initTabs();
  await fetchTableData();
  renderTable();
});

// 监听数据变化
watch(() => props.data, async (newVal) => {
  if (newVal) {
    tableData.value = newVal;
    renderTable();
  }
}, { deep: true });
</script>

<script lang="ts">
// 为了TypeScript全局类型声明
declare global {
  interface Window {
    AIGCDataVis: {
      render(dom: HTMLElement, spec: any): any;
      destroy(dom: HTMLElement): any;
      presetHook: any;
    }
  }
}
</script> 