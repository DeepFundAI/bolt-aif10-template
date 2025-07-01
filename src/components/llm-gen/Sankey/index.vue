<template>
  <div class="w-full flex flex-col">
    <!-- 颜色标识和下拉菜单的容器 -->
    <div class="flex justify-between items-center mb-4">
      <!-- 颜色标识小方块 -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <div class="w-4 h-4 bg-primary mr-2 rounded-sm"></div>
          <span class="text-xs">收入</span>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 bg-secondary mr-2 rounded-sm"></div>
          <span class="text-xs">支出</span>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 bg-tertiary mr-2 rounded-sm"></div>
          <span class="text-xs">利润</span>
        </div>
      </div>
      
      <!-- 下拉菜单组件 -->
      <div>
        <el-dropdown trigger="click" @command="handlePeriodChange">
          <span class="el-dropdown-link">
            {{ currentPeriodLabel }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item 
                v-for="item in periodOptions" 
                :key="item.value" 
                :command="item.value"
              >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    
    <!-- Sankey图容器 -->
    <div class="w-full h-[336px]" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed } from 'vue';
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
      depends?: string[];
    }>;
    view?: any[];
    token?: string;
    hook?: Function;
    [key: string]: any;
  };
  data?: any;
}

const props = defineProps<Props>();

// 响应式数据
const chartRef = ref<HTMLElement | null>(null);
const sankeyData = ref<any>(null);
const loading = ref(false);
const isFirstRender = ref(true);

// 报告期选项
const periodOptions = ref([
  { value: 'Latest', label: '最新报告期' },
  { value: 'Q1', label: '一季报' },
  { value: 'H1', label: '中报' },
  { value: 'Q3', label: '三季报' },
  { value: 'Annual', label: '年报' }
]);

const currentPeriod = ref('Latest');
const currentPeriodLabel = computed(() => {
  return periodOptions.value.find(item => item.value === currentPeriod.value)?.label || '最新报告期';
});

// 获取Sankey图数据
const fetchSankeyData = async () => {
  console.log("fetchSankeyData 开始执行");
  console.log("props.params:", props.params);
  
  // 如果是第一次渲染且有初始数据，直接使用
  if (isFirstRender.value && props.data?.sankey) {
    console.log("使用初始数据");
    sankeyData.value = props.data.sankey;
    isFirstRender.value = false;
    renderChart();
    return;
  }

  loading.value = true;
  try {
    const api = props.params.apis?.find(api => api.alis === 'sankey');
    if (!api) {
      console.error('未找到 sankey API 配置');
      return;
    }

    console.log("找到 API 配置:", api);
    
    const url = processUrl(api.url);
    const method = api.method.toLowerCase();
    const params = {
      ...processParams(api.params),
      extensions: {
        ...api.params.extensions,
        type: currentPeriod.value
      }
    };

    console.log("请求参数:", { method, url, params });

    const response = await axios({
      method,
      url,
      params: method === 'get' ? params : undefined,
      data: method !== 'get' ? params : undefined
    });

    console.log("API 响应:", response.data);

    sankeyData.value = response.data.data;

    await nextTick();
    renderChart();
  } catch (error) {
    console.error('获取Sankey图数据失败:', error);
  } finally {
    loading.value = false;
  }
};

// 处理报告期切换
const handlePeriodChange = (period: string) => {
  console.log("切换报告期:", period);
  currentPeriod.value = period;
  fetchSankeyData();
};

// 渲染Sankey图
const renderChart = () => {
  console.log("renderChart 开始执行");
  console.log("chartRef.value:", chartRef.value);
  console.log("sankeyData.value:", sankeyData.value);
  console.log("props.params:", props.params);

  if (!chartRef.value || !sankeyData.value) {
    console.error('渲染条件不满足');
    return;
  }

  nextTick(() => {
    if (!window.AIGCDataVis) {
      console.error('AIGCDataVis 库未加载');
      return;
    }

    try {
      if (chartRef.value) {
        // 构造图表参数
        const chartParams = {
          ...props.params,
          data: [{
            metadata: sankeyData.value.input,
            values: sankeyData.value.data
          }],
          view: props.params.view || [] // 直接使用 view 配置
        };

        console.log("最终图表参数:", chartParams);
        console.log("view 配置:", chartParams.view);

        // 清空容器
        if (chartRef.value) {
          chartRef.value.innerHTML = '';
        }

        // 渲染图表
        window.AIGCDataVis.render(chartRef.value, chartParams);
        console.log("图表渲染完成");
      }
    } catch (error) {
      console.error('渲染Sankey图失败:', error);
    }
  });
};

// 生命周期
onMounted(async () => {
  console.log("组件挂载");
  console.log("初始 props:", props);
  
  // 等待 DOM 完全渲染
  await nextTick();
  
  // 检查必要的依赖
  if (!window.AIGCDataVis) {
    console.error('AIGCDataVis 库未加载，请确保库已正确引入');
  }
  
  // 获取数据
  await fetchSankeyData();
});

// 监听外部数据变化
watch(() => props.data, (newVal) => {
  console.log("props.data 变化:", newVal);
  if (newVal?.sankey) {
    sankeyData.value = newVal.sankey;
    renderChart();
  }
}, { deep: true });

// 监听 params 变化
watch(() => props.params, (newVal) => {
  console.log("props.params 变化:", newVal);
}, { deep: true, immediate: true });
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

/* 颜色标识样式 */
.bg-primary {
  background-color: #F99300; /* Element Plus 主色调 */
}

.bg-secondary {
  background-color: #567FFC; /* Element Plus 成功色 */
}

.bg-tertiary {
  background-color: #F94457; /* Element Plus 警告色 */
}

/* 确保小方块和文本对齐 */
.text-xs {
  font-size: 12px;
}
</style>    