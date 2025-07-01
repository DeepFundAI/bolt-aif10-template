import type { ComputedRef } from "vue";

// 可视化组件需要股票信息
export interface Stock {
  // 市场id
  market: string;
  // 股票代码
  code: string;
  // 股票名称
  name: string;
}

export interface RenderParams {
  // 视图信息
  view: {main: any, secondary: any};
  // 数据
  data: [];
  // dom元素
  dom: HTMLElement;
  // 布局
  layout: string;
  // hook
  hook: any;
  // token
  token: any;
  // amisConfig
  amisConfig: {
    apis: ApiInfo[];
    kamisJsonpKey?: string;
  };
  // kamisToken
  kamisToken?: string;
  // 股票信息
  code?: string;
  // 市场
  market?: string;
}

export interface ApiInfo {
  // 接口地址
  url: string;
  // 是否使用本地缓存
  useLocalCache?: boolean;
  // 缓存时长
  expireDuration?: number;
  // 请求方法
  method: string;
  // 请求函数（避免动态参数情况）
  cb?: string;
  // 请求参数
  data: any;
}

// 组件渲染返回值
export interface ComponentRenderReturn {
  // 渲染图表
  renderChart(): void;
  // 切换图表
  changeChart(data: any): void;
  // 数据校验是否成功
  isDataValid(): boolean;
  // 是否支持图表切换
  isSupportChange(): boolean;
  // 销毁图表
  destoryChart(): void;
  // 切换视图索引
  changeViewIndex(index: number): void;
  // 是否自适应高度
  fitHeight: ComputedRef<boolean>;
  // 是否触发自定义事件
  emitCustomEvent: ComputedRef<boolean>;
  // 是否通栏
  fullWidth: ComputedRef<boolean>;
  // 关闭洞察
  closeInsight(): void;
  // 图表高度
  chartHeight: ComputedRef<string>;
  // 加载高度
  loadingHeight: ComputedRef<string>;
  // 是否低码类型
  isLowCode: ComputedRef<boolean>;
}