# FinWave App Frontend

这是一个基于 Nuxt 3 的财务记账 Web 应用前端项目。该应用旨在帮助用户追踪和管理财务数据。

## 项目结构

```
├── .github/                # GitHub 相关配置
├── .nuxt/                  # Nuxt 构建输出目录
├── .output/                # 生产环境构建输出目录
├── .vscode/                # VS Code 配置
├── assets/                 # 静态资源文件
├── components/             # Vue 组件
├── composables/            # 组合式函数
├── lang/                   # 国际化语言文件
├── layouts/                # 页面布局组件
├── libs/                   # 工具库
├── middleware/             # 中间件
├── pages/                  # 页面组件
├── plugins/                # 插件
├── public/                 # 公共静态文件
├── new_project/            # 新项目相关文件
├── .gitignore              # Git 忽略文件
├── .npmrc                  # NPM 配置
├── Dockerfile              # Docker 构建文件
├── LICENSE                 # 许可证文件
├── nuxt.config.ts          # Nuxt 配置文件
├── package.json            # 项目依赖配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── i18n.options.js         # 国际化配置
```

## 技术栈

- **框架**: Nuxt 3
- **UI 框架**: Tailwind CSS + DaisyUI
- **图表**: ApexCharts
- **日期处理**: Moment.js
- **国际化**: @nuxtjs/i18n
- **状态管理**: Vue 3 Composition API
- **类型检查**: TypeScript

## 主要依赖

- @headlessui/vue: UI 组件库
- @vueuse/core: Vue 组合式 API 工具集
- vue3-apexcharts: 图表组件
- @vuepic/vue-datepicker: 日期选择器
- vue3-treeselect: 树形选择器
- @coingecko/cryptoformat: 加密货币格式化工具

## 开发环境设置

确保安装所有依赖：

```bash
npm install
```

## 开发服务器

启动开发服务器，访问 `http://localhost:3000`：

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

## 预览生产版本

```bash
npm run preview
```

## 后端服务

您还需要启动 [后端服务](https://github.com/FinWave-App/FinWave-Backend) 服务器。
