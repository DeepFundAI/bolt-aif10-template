# ai-f10-frontend

This template should help get you started developing with Vue 3 in Vite.

## 项目结构

```
ai-f10-fronted/
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源文件(样式、图标)
│   ├── components/         # 公共组件
│   │   ├── icons           # 图标组件
│   ├── views/              # 页面视图组件
│   │   ├── briefinfo/      # 简况F10页面
│   │   │   ├── MainHome.vue/      # 主页
│   │   │   ├── components/        # 组件
│   │   │   ├── services/          # 服务
│   │   ├── customRender/   # 预览页面（crm平台配置验证页面）
│   │   ├── demo/           # 开发验证使用
│   │   ├── theme/          # 主题配置页面（element-plus）
│   ├── router/             # 路由配置
│   ├── stores/             # 状态管理
│   │   ├── app.ts          # 应用状态
│   │   ├── panel.ts        # 页面状态
│   │   ├── session.ts      # 登录状态
│   │   ├── smart-bar.ts    # 智能条状态
│   ├── types/              # TypeScript 类型定义
│   ├── common/             # 公共工具和配置
│   │   ├── utils/          # 公共工具
│   │   ├── config/         # 公共配置
│   │   ├── directives/     # 公共指令
│   │   ├── echart-skin/    # ECharts 主题
│   │   ├── models/         # 数据结构定义（对接接口model）
│   │   ├── service/        # 通用服务（请求封装等）
│   ├── App.vue             # 根组件
│   └── main.ts             # 应用入口文件
│
├── public/                 # 公共静态资源
├── node_modules/           # 依赖包
│
├── vite.config.ts          # Vite 配置文件
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── package.json            # 项目依赖配置
└── .eslintrc.cjs           # ESLint 配置
```

## 技术栈
- 核心框架：Vue 3
- 开发语言：TypeScript
- 构建工具：Vite
- CSS 框架：Tailwind CSS + Less
- 代码规范：ESLint + Prettier
- UI 框架：Element Plus + Atom UI
- 可视化组件：AIGCDataVis

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
