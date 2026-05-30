# 🌟 个人博客网站

<div align="center">
  
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

</div>

这是一个基于 Vue 3 + Vite + TailwindCSS 构建的个人博客网站，包含了登录注册、文章浏览、留言板等功能。

## 📋 目录

- [功能特点](#-功能特点)
- [页面结构](#-页面结构)
- [技术栈](#-技术栈)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [自定义配置](#-自定义配置)
- [注意事项](#-注意事项)
- [许可证](#-许可证)

## ✨ 功能特点

- 🎨 现代化的UI设计，采用暗色主题
- 📱 响应式布局，适配各种设备
- 🌠 粒子动画和星空背景效果
- 🏷️ 文章分类和标签系统
- 💬 留言板功能
- 🔐 登录和注册页面（演示用，无实际后端）

## 📑 页面结构

- 🏠 **首页**：展示博客概览和最新文章
- 💻 **技术分享**：技术相关的文章列表
- 🌈 **生活感悟**：生活相关的文章列表
- ✏️ **随手一记**：短小随笔和笔记
- 👤 **个人资料**：博主的个人介绍
- 📝 **留言板**：访客留言区
- 🔑 **登录/注册**：用户账户系统（演示）

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **TailwindCSS** - 实用优先的 CSS 框架
- **GSAP** - 专业级 JavaScript 动画库

## 🚀 快速开始

### 安装依赖

```bash
# 使用npm安装项目依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev
```

### 构建生产版本

```bash
# 构建生产版本
npm run build
```

### 预览生产版本

```bash
# 本地预览生产构建
npm run preview
```

## 📁 项目结构

```
📦 个人博客
 ┣ 📂 public/             # 静态资源目录
 ┣ 📂 src/                # 源代码
 ┃ ┣ 📂 assets/           # 资源文件
 ┃ ┣ 📂 components/       # 组件
 ┃ ┣ 📂 router/           # 路由配置
 ┃ ┣ 📂 utils/            # 工具函数
 ┃ ┣ 📂 views/            # 页面视图
 ┃ ┣ 📜 App.vue           # 根组件
 ┃ ┣ 📜 main.js           # 入口文件
 ┃ ┗ 📜 index.css         # 全局样式
 ┣ 📜 index.html          # HTML 模板
 ┣ 📜 package.json        # 项目依赖
 ┣ 📜 vite.config.js      # Vite 配置
 ┣ 📜 tailwind.config.js  # TailwindCSS 配置
 ┗ 📜 README.md           # 项目说明
```

## ⚙️ 自定义配置

### 修改主题颜色

可以在 `tailwind.config.js` 文件中修改主题颜色：

```js
theme: {
  extend: {
    colors: {
      primary: {
        // 修改主色调
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... 其他色调
        900: '#0c4a6e',
      },
      secondary: {
        // 修改次要色调
        50: '#f8fafc',
        100: '#f1f5f9',
        // ... 其他色调
        900: '#0f172a',
      }
    }
  }
}
```

### 添加新页面

1. 在 `src/views` 目录下创建新的 Vue 组件
2. 在 `src/router/index.js` 中添加新的路由配置
3. 在导航栏组件 `src/components/NavBar.vue` 中添加新的导航链接

## ⚠️ 注意事项

- 🔒 登录和注册功能仅作演示，没有实际的后端验证
- 📄 文章内容为示例数据，实际项目中应从后端 API 获取

## 📄 许可证

[MIT](LICENSE) © 2023-2024 个人博客 