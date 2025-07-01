export type StockData = { code: string; name: string; market: string }[];
export const LAYOUT = {
  /** 1*1 */
  SMALL: 'sm-1*1',
  /** 2*1 */
  SMALL_2_1: 'sm-2*1',
  /** 1*2 */
  SMALL_1_2: 'sm-1*2',
  /** 1*1 */
  LARGE: 'lg-1*1',
  /** 1*1 */
  LARGE_3_2: 'lg-3*2'
} as const;
export type ListData = { [key: string]: string }[];
export type Input<D = ListData> = {
  /** 渲染的 dom 容器 */
  dom: HTMLElement;
  /** 图表主题配置 */
  theme: Record<string, unknown>;
  /** 布局配置 */
  layout: (typeof LAYOUT)[keyof typeof LAYOUT];
  /** 图表标准数据集 */
  data: D;
  /** 股票数据 */
  stocks?: StockData;
};

export interface Component<P extends Input = Input> {

  render(): void;

  destroy(): void;
}

export type ComponentDefinition<D = unknown, P extends Input = Input> = {
  /** 组件唯一 id（AI 模型训练依赖） */
  id: string;
  /** 组件名称，英文 */
  name_en: string;
  /** 组件名称，中文 */
  name_zh: string;
  /** 分类标签（AI 模型训练依赖） */
  types_en: string[];
  /** 可视化目标，英文（AI 模型训练依赖） */
  purpose_en: string[];
  /** 可视化目标，中文（AI 模型训练依赖） */
  purpose_zh: string[];
  /**
   * （AI 模型训练依赖）
   * @example ['echarts','aime','f10'] */
  standers: string;
  /** （AI 模型训练依赖） */
  rules: unknown;
  /** 数据特征参数（AI 模型训练依赖） */
  parameters: D;
  /** 渲染 */
  functionRequire: (params: P) => Component<P>;
};

// 图表点击事件返回值
export interface ChartSelectContent {
  // 选中类型
  selectedType: 'key' | 'value';
  // 鼠标当前选中值
  selectedValue: string;
  // 选中数据范围
  data: {
    // 选中key
    key: string;
    // 选中值
    value: string;
    // 选中数据索引
    dataIndex: number;
  }[]
}

export interface ChartJumpUrl {
  /** 跳转链接 */
  url: string;
  /** 跳转标题 */
  title: string;
}

export interface ChartJumpHq {
  /** 股票代码 */
  code: string;
  /** 股票市场 */
  market: string;
}

export type ChartData = ChartJumpUrl | ChartJumpHq | ChartSelectContent | string;