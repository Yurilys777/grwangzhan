<template>
  <div class="min-h-screen">
   
    
    <!-- 粒子背景 -->
    <particles-background
      color-theme="pink"
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
        <h1 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-4">生活感悟</h1>
        <p class="text-gray-300 text-center max-w-3xl mx-auto">
          分享生活中的点滴思考、感悟和心情，记录生活的美好瞬间。
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
            <button class="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">全部</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors">旅行</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors">美食</button>
            <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors">阅读</button>
          </div>
          
          <!-- 文章列表 -->
          <div class="space-y-8">
            <!-- 文章1 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400">旅行</span>
                    <span class="ml-2">2025-06-10</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      328
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">独自旅行的力量：在陌生城市找到自己</h3>
                  <p class="text-gray-400 text-sm mb-4">独自旅行不仅仅是一种出行方式，更是一次与自我对话的机会。本文分享我在杭州西湖畔独行的经历，如何在陌生的环境中发现内心的平静，以及那些偶然的相遇如何让旅途变得更加丰富多彩。当我们放慢脚步，才能真正感受城市的脉搏...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章2 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400">生活方式</span>
                    <span class="ml-2">2025-06-02</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      287
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">极简生活一年后：我所学到的五件事</h3>
                  <p class="text-gray-400 text-sm mb-4">一年前，我决定拥抱极简主义，开始了断舍离的生活方式。这不仅仅是物品的减少，更是一种思维方式的转变。本文分享我在这一年中的心路历程，从最初的挣扎到现在的平静，以及极简主义如何帮助我找到真正重要的东西...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章3 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400">阅读</span>
                    <span class="ml-2">2025-05-20</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      253
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">改变我人生轨迹的三本书</h3>
                  <p class="text-gray-400 text-sm mb-4">书籍是人类进步的阶梯，有些书甚至能够彻底改变一个人的思维方式和人生轨迹。本文分享三本对我影响深远的书籍，从哲学思考到实用技能，它们如何在不同人生阶段给予我指引和力量，以及我从中获得的最重要启示...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章4 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400">电影</span>
                    <span class="ml-2">2025-05-15</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      218
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">电影中的人生哲理：《肖申克的救赎》启示录</h3>
                  <p class="text-gray-400 text-sm mb-4">《肖申克的救赎》不仅是一部经典电影，更是一堂关于希望、坚持和自由的人生课。本文深入分析电影中的核心主题和隐喻，探讨安迪·杜弗雷恩的角色如何教会我们面对逆境的态度，以及红衣典狱长这一角色所揭示的关于权力与腐败的警示...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                    阅读全文
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 文章5 -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <svg class="h-20 w-20 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-xs text-gray-400 mb-2">
                    <span class="px-2 py-1 rounded-full bg-pink-500/10 text-pink-400">音乐</span>
                    <span class="ml-2">2025-05-08</span>
                    <span class="ml-2 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      196
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">音乐的治愈力量：在旋律中找到平静</h3>
                  <p class="text-gray-400 text-sm mb-4">音乐是一种神奇的存在，它能够穿透心灵的防线，直达情感的核心。本文分享我如何通过不同类型的音乐度过人生的低谷期，从古典音乐的庄严肃穆到爵士乐的即兴自由，每种音乐类型如何在不同情境下提供情感支持和心灵慰藉...</p>
                  <router-link to="/" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
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
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-pink-500/20 text-sm font-medium text-pink-400">1</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">2</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700">3</a>
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
                class="flex-1 px-4 py-2 rounded-l-lg bg-gray-700/50 border border-r-0 border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
              >
              <button 
                type="submit"
                class="px-4 py-2 rounded-r-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transition-all duration-300"
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
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">旅行</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">美食</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">阅读</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">电影</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">音乐</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">摄影</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">健康</a>
              <a href="#" class="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 hover:bg-pink-500/20 hover:text-pink-400 transition-colors text-sm">心情</a>
            </div>
          </div>
          
          <!-- 热门文章 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 class="text-lg font-semibold mb-4">热门文章</h3>
            <div class="space-y-4">
              <!-- 热门文章1 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-pink-400 transition-colors">独自旅行的力量：在陌生城市找到自己</h4>
                  <p class="text-xs text-gray-400 mt-1">1428 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章2 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-pink-400 transition-colors">电影中的人生哲理：《肖申克的救赎》启示录</h4>
                  <p class="text-xs text-gray-400 mt-1">1256 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章3 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-pink-400 transition-colors">改变我人生轨迹的三本书</h4>
                  <p class="text-xs text-gray-400 mt-1">1135 阅读</p>
                </div>
              </div>
              
              <!-- 热门文章4 -->
              <div class="flex gap-3 group">
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg class="h-8 w-8 text-pink-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium group-hover:text-pink-400 transition-colors">极简生活一年后：我所学到的五件事</h4>
                  <p class="text-xs text-gray-400 mt-1">987 阅读</p>
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
import FallingStarsBackground from '../components/FallingStarsBackground.vue'
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
  background: radial-gradient(ellipse at center, rgba(236, 72, 153, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
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
</style> 