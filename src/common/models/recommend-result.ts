// 股票信息
export interface Stock {
  seq: string;
  stock_code: string;
  market_id: string;
  stock_name: string;
  sec_id: string;
  org_id: string;
  stock_name_ping_yin: string;
  exchange_name: string;
  exchange_code: string;
  listed_status_name: string;
  listed_status_code: string;
  ths_code: string;
  market_code: string;
  image_url: string;
}
// 指标信息
export interface IndexInfo {
  name: string;
  index_id: string;
  unit: string;
}
// 模块类型 fix 高定 prompt 非高定 fix_chart 半高定 fix_prompt 指定 lowcode 低码模式
type ViewType = 'fix' | 'prompt' | 'fix_chart' | 'fix_prompt' | 'lowcode';

// 解析步骤
export interface ParseStep {
  // 步骤信息
  msg: string;
  // 步骤名称
  name: QueryStatus;
  // 步骤状态
  status: string;
}
export interface AttributeDescription {
  // 数据类型
  attribute_type: 'STR' | 'DOUBLE' | 'DATE';
  // 数据单位
  attribute_unit: string | null;
  // 字段名称
  attribute_name: string;
}
// 属性信息（模型端生成）
export interface InputData {
  // 属性描述
  attribute_description: AttributeDescription[];
  // 数据类型
  data_type: string
}

// 图层
export interface Layer {
  // 图层类别
  type: string
  // 图层配置
  encoding: any
  // 最大高度
  maxHeight?: number
  // 宽度
  width?: number
  // 融合股票
  stocks: Stock[]
  // 自定义事件
  customEvent: any
}

// 输出
export interface OutDataItem {
  // 组件名称
  name: string;
  // 组件所需字段映射
  parameter: Layer[]
  // 组件类型
  type: string;
  // 扩展字段
  extension: any;
  // 组件配置
  style: any;
}

// 视图信息
export interface Visual {
  // 当前选中图表下标
  index: number;
  // 源数据
  data: any;
  // 输入数据
  input: InputData;
  // 推荐数据
  output: OutDataItem[];
}

// 视图信息
export interface View {
  // 用户期望图表
  chart_ids: string[];
  //扩展字段
  extension: any;
  // 高定组件id
  fix_module_id: string;
  // 股票名称（用作tab标题）
  name: string;
  // 视图类型
  type: ViewType;
  // 推荐图表信息
  visual: Visual;
}

// 模块
export interface Section {
  // 推荐图表id
  chart_ids: string[];
  // 原始问句解析股票列表
  default_stock_meta: Stock[];
  // 扩展字段
  extension: any;
  // 分组id
  gid: string;
  // 模块id
  id: string;
  // 展示哪个视图（多股票聚合使用）
  index: number;
  // 解析指标列表
  index_meta: IndexInfo[];
  // 面板id
  pid: string;
  // 解析股票列表
  stock_meta: Stock[];
  // 副标题
  subtitle: string;
  // 标题
  title: string;
  // 提示词
  value: string;
  // 是否展示行情图
  kline: boolean,
  // 视图信息
  view_wrapper: {
    index: number;
    views: View[]
  };
  // 当前视图索引
  visual_index: number;
  // 当前tab索引
  view_index: number;
  // 是否激活
  active?: boolean;
  // 是否hover状态
  hover?: boolean;
  // 源模块
  from?: string;
}
// 分组
export interface Group {
  // 组id
  id: string;
  // 组索引
  index: number;
  // 面板id
  pid: string;
  // 分组逻辑
  reason: string;
  // 模块列表
  sections: Section[];
  // 组名称
  title: string;
}

// 面板结果
export interface Panel {
  // 面板id
  id: string;
  // 当前分组
  groups: Group[];
  // 当前问句
  query: string;
  // 解析股票列表
  stock_meta: Stock[];
}

export interface PanelV2 {
  // 面板id
  id: string;
  // 模块列表
  section_tasks: AIF10Section[];
  // 当前问句
  query: string;
  // 解析股票列表
  page_stock_meta: Stock;
}

// AI解析
export interface SectionAnalyze {
  // 解析内容
  content: string;
  // 数据集特征
  dataset_features: any[];
  // 生成id
  id: string;
  // 页面id
  pid: string;
  // 模块id
  sid: string;
}

// 查询状态
export type QueryStatus = 'error' | 'running' | 'init' | 'ready';

// 推荐结果
export interface RecommendResult {
  // 会话id（面板|模块）
  id: string;
  // 查询状态
  status: QueryStatus;
  // 当前解析步骤
  step: ParseStep;
  // 历史解析步骤
  step_history: ParseStep[];
  // 用户id
  uid: string | null;
  // 是否验证
  valid: number;
  // 接口版本
  version: number;
}

export interface PanelCreate {
  id: string;
  query: string;
  resource: string;
  status: string;
}

export interface SectionCreate {
  id: string;
  query: string;
  resource: string;
  status: string;
}

export interface AIF10Panel extends RecommendResult {
  // 面板结果
  result: Panel;
}

export interface AIF10PanelV2 extends RecommendResult {
  // 面板结果
  result: PanelV2;
}

export interface AIF10Section extends RecommendResult {
  // 模块结果
  result: Section;
}
export interface AIF10SectionAnalyze extends RecommendResult {
  // AI解析结果
  result: SectionAnalyze;
}