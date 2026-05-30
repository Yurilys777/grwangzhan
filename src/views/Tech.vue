<template>
  <div class="min-h-screen">
    
    <!-- 原有的粒子背景可以保留或删除 -->
    <particles-background
      color-theme="blue"
      :particle-count="60"
      :connection-distance="120"
      :speed="0.2"
      class="!fixed inset-0 -z-10 opacity-50"
    />
    
    <!-- 添加聚光灯效果 -->
    <div class="spotlight spotlight-left"></div>
    <div class="spotlight spotlight-right"></div>
    
    <!-- 页面标题 -->
    <div class="py-16 bg-gradient-to-b from-gray-900 to-transparent">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">技术分享</h1>
        <p class="text-gray-300 text-center max-w-3xl mx-auto">
          这里分享我的技术学习心得、项目经验和编程技巧，希望能够帮助到更多的开发者。
        </p>
      </div>
    </div>
    
    <!-- 文章列表 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左侧文章列表 -->
        <div class="lg:w-2/3">
          <!-- 文章过滤器 -->
          <div class="flex flex-wrap items-center gap-2 mb-8">
            <span class="text-gray-400">筛选：</span>
            <button class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">全部</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors">前端开发</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors">后端开发</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors">人工智能</button>
          </div>
          
          <!-- 文章列表 -->
          <div class="space-y-8">
            <!-- 文章1 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">前端开发</span>
                    <span class="ml-2">2025-06-15</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      542
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Vue 3 组合式API深度解析与实战应用</h3>
                  <p class="text-gray-400 text-sm mb-4">Vue 3 的组合式API彻底改变了我们构建Vue应用的方式。本文将深入探讨组合式API的设计理念、核心概念和实际应用场景，通过实例讲解如何构建更加可维护和可扩展的组件。从ref、reactive到生命周期钩子的迁移，全面掌握这一强大特性...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章2 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">前端开发</span>
                    <span class="ml-2">2025-06-02</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      487
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">TypeScript高级类型系统详解</h3>
                  <p class="text-gray-400 text-sm mb-4">TypeScript的类型系统远比大多数开发者想象的更加强大。本文将带你探索条件类型、映射类型、类型推断和类型保护等高级特性，通过实际案例展示如何使用这些功能来构建类型安全且可维护的代码库。掌握这些技巧后，你将能够更加优雅地解决复杂的类型问题...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章3 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">后端开发</span>
                    <span class="ml-2">2025-05-20</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      376
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Web应用安全最佳实践：从认证到授权</h3>
                  <p class="text-gray-400 text-sm mb-4">Web应用安全是每个开发者必须重视的课题。本文全面介绍现代Web应用中常见的安全威胁，包括XSS、CSRF、SQL注入和中间人攻击等，并提供实用的防御策略。从安全的认证系统设计到细粒度的权限控制，帮助你构建一个真正安全的Web应用...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章4 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">DevOps</span>
                    <span class="ml-2">2025-05-15</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      329
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Docker与Kubernetes实战指南</h3>
                  <p class="text-gray-400 text-sm mb-4">容器化技术已成为现代应用部署的标准。本文将带你从Docker基础知识开始，逐步深入Kubernetes的核心概念和实战技巧。通过实际案例学习如何构建容器镜像、管理容器生命周期、设计高可用集群架构，以及实现自动化部署和扩展策略...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章5 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">数据库</span>
                    <span class="ml-2">2025-05-08</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      298
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">MongoDB高级查询与性能优化</h3>
                  <p class="text-gray-400 text-sm mb-4">MongoDB作为流行的NoSQL数据库，其强大的查询能力常被低估。本文深入探讨MongoDB的高级查询技术，包括聚合管道、地理空间查询和全文检索等特性。同时分享数据库索引设计、查询优化和性能监控的最佳实践，帮助你构建高性能的数据访问层...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 分页 -->
          <div class="flex justify-center mt-12">
            <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">
                <span class="sr-only">上一页</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-blue-500/20 text-sm font-medium text-blue-400">1</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">2</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">3</a>
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400">...</span>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">10</a>
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">
                <span class="sr-only">下一页</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
        
        <!-- 右侧边栏 -->
        <div class="lg:w-1/3">
          <!-- 搜索框 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8">
            <h3 class="text-lg font-semibold mb-4">搜索文章</h3>
            <form @submit.prevent class="flex">
              <input 
                type="text" 
                placeholder="输入关键词..." 
                class="flex-1 px-4 py-2 rounded-l-lg bg-gray-700/50 border border-r-0 border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              >
              <button 
                type="submit"
                class="px-4 py-2 rounded-r-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
          
          <!-- 热门标签 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8">
            <h3 class="text-lg font-semibold mb-4">热门标签</h3>
            <div class="flex flex-wrap gap-2">
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">Vue.js</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">React</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">JavaScript</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">TypeScript</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">Node.js</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">CSS</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">TailwindCSS</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm">Python</a>
            </div>
          </div>
          
          <!-- 热门文章 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 class="text-lg font-semibold mb-4">热门文章</h3>
            <div class="space-y-4">
              <!-- 热门文章1 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-blue-400 transition-colors">React性能优化：避免常见的渲染陷阱</h4>
                  <p class="text-xs text-gray-400 mt-1">1562 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章2 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-blue-400 transition-colors">前端安全：如何防止XSS和CSRF攻击</h4>
                  <p class="text-xs text-gray-400 mt-1">1348 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章3 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-blue-400 transition-colors">SQL性能调优：索引设计与查询优化</h4>
                  <p class="text-xs text-gray-400 mt-1">1205 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章4 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-blue-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-blue-400 transition-colors">深入理解JavaScript异步编程模型</h4>
                  <p class="text-xs text-gray-400 mt-1">1087 阅读</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ParticlesBackground from '../components/ParticlesBackground.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

// 页面加载动画
onMounted(() => {
  // 聚光灯动画
  gsap.to('.spotlight-left', {
    opacity: 0.7,
    duration: 2,
    delay: 0.5,
    ease: 'power2.inOut'
  })
  
  gsap.to('.spotlight-right', {
    opacity: 0.7,
    duration: 2,
    delay: 0.8,
    ease: 'power2.inOut'
  })
})
</script>

<style scoped>
/* 聚光灯效果 */
.spotlight {
  position: fixed;
  width: 30vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
  opacity: 0;
  z-index: 2;
}

.spotlight-left {
  left: -15vw;
  top: 0;
}

.spotlight-right {
  right: -15vw;
  top: 0;
}

/* 添加媒体查询，优化移动端显示 */
@media (max-width: 768px) {
  .spotlight {
    width: 20vw; /* 减小聚光灯宽度 */
  }
  
  .spotlight-left {
    left: -10vw; /* 调整左侧聚光灯位置 */
  }
  
  .spotlight-right {
    right: -10vw; /* 调整右侧聚光灯位置 */
  }
}

/* 小屏幕设备进一步优化 */
@media (max-width: 480px) {
  .spotlight {
    display: none; /* 在小屏幕设备上完全隐藏聚光灯效果 */
  }
}

/* 确保页面容器不会溢出 */
.container {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}
</style>