<template>
  <div class="related-concept-container bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <!-- Left Panel: Concept List -->
    <div class="concept-list-panel">
      <div v-if="loading" class="text-center p-4">Loading...</div>
      <div v-else-if="error" class="text-center p-4 text-red-500">{{ error }}</div>
      <div v-else class="flex flex-wrap gap-2">
        <div
          v-for="concept in conceptListWithPrices"
          :key="concept.quote_code"
          @click="selectConcept(concept)"
          class="concept-tag"
          :class="{
            'selected': selectedConcept?.quote_code === concept.quote_code,
            'rise': concept.zdf > 0 && selectedConcept?.quote_code !== concept.quote_code,
            'fall': concept.zdf < 0 && selectedConcept?.quote_code !== concept.quote_code,
            'flat': (concept.zdf === 0 || concept.zdf === undefined) && selectedConcept?.quote_code !== concept.quote_code
          }"
        >
          <span class="concept-name">{{ concept.name }}</span>
          <span
            class="concept-price"
            :class="{
              'text-rise': concept.zdf > 0,
              'text-fall': concept.zdf < 0,
              'text-flat': concept.zdf === 0 || concept.zdf === undefined,
            }"
          >
            {{ concept.zdf_text }}
          </span>
        </div>
      </div>
    </div>

    <!-- Right Panel: Concept Details -->
    <div class="concept-detail-panel">
      <div v-if="detailLoading" class="text-center p-10">Loading details...</div>
      <div v-else-if="detailError" class="text-center p-10 text-red-500">{{ detailError }}</div>
      <div v-else-if="conceptDetail" class="space-y-4 p-1">
        <!-- Top Part: Concept Info -->
        <div class="concept-info-header">
            <div class="flex flex-col">
                <div class="flex items-center gap-1">
                    <span class="text-base font-medium">{{ conceptDetail.name }}</span>
                    <span class="font-mono text-sm" :class="selectedConcept.zdf > 0 ? 'text-rise' : 'text-fall'">
                        {{ selectedConcept.zdf_text }}
                    </span>
                </div>
                <div class="flex items-center gap-2 text-xs">
                    <span class="text-rise">涨 {{ conceptDetail.rise_cnt || 0 }}</span>
                    <div class="rise-fall-bar">
                        <div class="rise-bar" :style="{ width: riseFallRatio.risePercent + '%' }"></div>
                    </div>
                    <span class="text-fall">跌 {{ conceptDetail.fall_cnt || 0 }}</span>
                </div>
            </div>
            <!-- This could be a button for more actions in the future -->
            <div class="flex-shrink-0 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
            </div>
        </div>

        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed explain-text" @click="toggleExplain" :class="{ 'is-expanded': isExplainExpanded }">
            {{ conceptDetail.explain }}
        </p>

        <!-- Bottom Part: Leading Stocks -->
        <div>
          <h3 class="text-xs font-medium text-gray-400 mb-2">概念领涨股</h3>
          <div class="leading-stocks-grid">
            <div v-if="conceptDetail.components && conceptDetail.components.length > 0">
              <div v-for="stock in conceptDetail.components" :key="stock.code" class="stock-card">
                  <div class="font-medium text-sm">{{ stock.name }}</div>
                  <div class="text-xs" :class="getStockPriceClass(stock)">
                    <span>{{ stock.price || '--' }}</span>
                    <span class="ml-1">{{ stock.zdf_text || '--' }}</span>
                  </div>
                  <div v-if="stock.label" class="stock-label">
                    {{ stock.label }}
                  </div>
              </div>
            </div>
            <div v-else class="text-center text-gray-500 py-4 col-span-full">
              没有相关的领涨股信息。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios';
import { processUrl, processParams } from '@/common/utils/params-processor';

// Interfaces for props and data
interface Props {
  params: {
    apis: Array<{
      method: string;
      isFirstScreen: boolean;
      alis: string;
      url: string;
      params: Record<string, any>;
    }>;
    [key: string]: any;
  };
  data?: {
    conceptList?: any;
    conceptPrice?: any;
  };
}

const props = defineProps<Props>();

// Reactive state
const concepts = ref<any[]>([]);
const selectedConcept = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const conceptDetail = ref<any>(null);
const detailLoading = ref(false);
const detailError = ref<string | null>(null);
const isExplainExpanded = ref(false);

// Combined data for the list
const conceptListWithPrices = computed(() => {
  return concepts.value.map(concept => {
    // Price data is now part of the concept object after merging
    const priceInfo = concept.priceInfo || {};
    const zdf = priceInfo.value?.[0]?.[1]; // 涨跌幅, example: -0.1103
    return {
      ...concept,
      zdf: zdf,
      zdf_text: zdf !== undefined ? `${(zdf * 100).toFixed(2)}%` : '--',
    };
  });
});

const fetchConceptData = async () => {
  loading.value = true;
  error.value = null;
  try {
    // Use pre-fetched data if available
    if (props.data?.conceptList && props.data?.conceptPrice) {
      concepts.value = mergeConceptData(props.data.conceptList.data, props.data.conceptPrice.data.quote_data);
      return;
    }

    const listApi = props.params.apis.find(api => api.alis === 'conceptList');
    const priceApi = props.params.apis.find(api => api.alis === 'conceptPrice');

    if (!listApi || !priceApi) {
      throw new Error("API configuration for concept list or price is missing.");
    }

    // Fetch concept list
    const listUrl = processUrl(listApi.url);
    const listParams = processParams(listApi.params, props.params);
    const listResponse = await axios.get(listUrl, { params: listParams });

    const conceptListData = listResponse.data.data;
    if (!conceptListData || conceptListData.length === 0) {
      concepts.value = [];
      return;
    }

    // Prepare params for price API
    const priceUrl = processUrl(priceApi.url);

    // Group concepts by market_id to build the code_list
    const conceptsByMarket = conceptListData.reduce((acc: Record<string, string[]>, concept: any) => {
      const market = concept.market_id;
      if (!acc[market]) {
        acc[market] = [];
      }
      acc[market].push(concept.quote_code);
      return acc;
    }, {});

    const codeList = Object.keys(conceptsByMarket).map(marketId => ({
      market: marketId,
      codes: conceptsByMarket[marketId],
    }));

    // Create a deep copy of params and replace code_list
    const priceApiParams = JSON.parse(JSON.stringify(priceApi.params));
    priceApiParams.code_list = codeList;

    const processedPriceParams = processParams(priceApiParams, props.params);

    // Fetch concept prices
    const priceResponse = await axios.post(priceUrl, processedPriceParams);
    const priceData = priceResponse.data.data.quote_data;

    concepts.value = mergeConceptData(conceptListData, priceData);

  } catch (e: any) {
    error.value = "Failed to load concept data.";
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const mergeConceptData = (list: any[], prices: any[]) => {
  const priceMap = new Map(prices.map(p => [p.code, p]));
  return list.map(item => {
    return {
      ...item,
      priceInfo: priceMap.get(item.quote_code)
    };
  });
};

onMounted(async () => {
  await fetchConceptData();
  if (conceptListWithPrices.value.length > 0) {
    // This will trigger the watch handler
    selectConcept(conceptListWithPrices.value[0]);
  }
});

const selectConcept = (concept: any) => {
  selectedConcept.value = concept;
};

const fetchConceptDetail = async (concept: any) => {
  if (!concept) return;
  detailLoading.value = true;
  detailError.value = null;
  conceptDetail.value = null;

  try {
    const detailApi = props.params.apis.find(api => api.alis === 'conceptDetail');
    if (!detailApi) {
      throw new Error("API configuration for concept detail is missing.");
    }

    const url = processUrl(detailApi.url);
    
    // The config uses selectedData. I'll build an object that processParams can use.
    const processingParams = {
        ...props.params,
        selectedData: {
            quote_code: concept.quote_code,
            market_id: concept.market_id
        }
    };
    const params = processParams(detailApi.params, processingParams);

    const response = await axios.get(url, { params });
    
    if (response.data && response.data.data) {
        // Mock data for demonstration as backend doesn't provide it yet
        const mockComponents = (response.data.data.components || []).map((c: any) => ({
            ...c,
            price: (Math.random() * 100).toFixed(2),
            zdf_text: `${((Math.random() - 0.5) * 10).toFixed(2)}%`,
            label: Math.random() > 0.6 ? `${Math.ceil(Math.random()*10)}天${Math.ceil(Math.random()*5)}板` : null
        }));
      conceptDetail.value = { ...response.data.data, components: mockComponents };
    } else {
      throw new Error("No data returned for concept detail.");
    }

  } catch (e: any) {
    detailError.value = "Failed to load concept details.";
    console.error(e);
  } finally {
    detailLoading.value = false;
  }
};

watch(selectedConcept, (newConcept) => {
  if (newConcept) {
    fetchConceptDetail(newConcept);
  }
  // Reset expansion state when concept changes
  isExplainExpanded.value = false;
});

const getStockPriceClass = (stock: any) => {
    const zdf = parseFloat(stock.zdf_text);
    if (isNaN(zdf)) return 'text-gray-500';
    if (zdf > 0) return 'text-rise';
    if (zdf < 0) return 'text-fall';
    return 'text-gray-500';
}

const toggleExplain = () => {
    isExplainExpanded.value = !isExplainExpanded.value;
}

const riseFallRatio = computed(() => {
    if (!conceptDetail.value) return { risePercent: 50, fallPercent: 50 };
    const rise = conceptDetail.value.rise_cnt || 0;
    const fall = conceptDetail.value.fall_cnt || 0;
    const total = rise + fall;
    if (total === 0) return { risePercent: 50, fallPercent: 50 };
    return {
        risePercent: (rise / total) * 100,
        fallPercent: (fall / total) * 100,
    };
});

</script>

<style scoped>
.related-concept-container {
  display: flex;
  gap: 24px;
  width: 100%;
  height: 450px; /* Or as needed */
  padding: 16px;
  box-sizing: border-box;
}

.concept-list-panel {
  width: 280px;
  flex-shrink: 0;
  overflow-y: auto;
  padding-right: 16px;
  border-right: 1px solid var(--atom-border-color, #E5E7EB);
}

.concept-tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  flex-grow: 1;
  flex-basis: 80px;
  gap: 2px;
  border: 1px solid transparent;
}

.concept-tag.selected {
  border-color: #FF2436;
  background-color: rgba(255, 36, 54, 0.04);
}

.concept-tag.rise {
  background-color: rgba(255, 36, 54, 0.1);
}

.concept-tag.fall {
  background-color: rgba(7, 171, 75, 0.1);
}

.concept-tag.flat {
  background-color: rgba(0, 0, 0, 0.04);
}

.concept-name {
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
  /* Ensure text wrapping for long names */
  word-break: break-all;
  padding: 0 4px;
}

.concept-price {
  font-family: 'THS JinRongTi', monospace;
  font-size: 12px;
}

.concept-price.text-rise {
  color: #FF2436;
}
.concept-price.text-fall {
  color: #07AB4B;
}
.concept-price.text-flat {
  color: rgba(0, 0, 0, 0.84);
}

.concept-detail-panel {
  flex-grow: 1;
  overflow-y: auto;
}

.leading-stocks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
}

.stock-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding: 12px 0;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%);
}

.stock-label {
    font-size: 10px;
    line-height: 1.4;
    padding: 0 3px;
    border-radius: 2px;
    border: 0.5px solid #FF2436;
    color: #FF2436;
}

.grid-header {
  font-weight: 600;
  color: #6B7280;
  font-size: 14px;
}

.dark .grid-header {
    color: #9CA3AF;
}

.stock-row-simple {
  padding: 8px 4px;
  border-bottom: 1px solid #F3F4F6;
  dark:border-gray-700;
}

.dark .stock-row-simple {
    border-bottom-color: #374151;
}

/* Custom scrollbar for webkit browsers */
.concept-list-panel::-webkit-scrollbar,
.concept-detail-panel::-webkit-scrollbar {
  width: 6px;
}

.concept-list-panel::-webkit-scrollbar-thumb,
.concept-detail-panel::-webkit-scrollbar-thumb {
  background-color: #D1D5DB;
  border-radius: 3px;
}

.concept-list-panel::-webkit-scrollbar-track,
.concept-detail-panel::-webkit-scrollbar-track {
  background-color: transparent;
}

.concept-info-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4px;
}

.rise-fall-bar {
    width: 80px;
    height: 4px;
    background-color: #07AB4B; /* Fall color */
    display: flex;
    border-radius: 2px;
    overflow: hidden;
}

.rise-bar {
    height: 100%;
    background-color: #FF2436; /* Rise color */
}

.explain-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}

.explain-text.is-expanded {
    -webkit-line-clamp: unset;
}
</style> 