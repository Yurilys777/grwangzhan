<template>
  <div>
    <!-- 添加流星背景 -->
    <falling-stars-background
      color-theme="all"
      :count="150"
      :speed="2"
      :trail-length="25"
      class="!fixed inset-0 -z-10"
    />
    
    <!-- 主要内容 -->
    <section class="relative min-h-screen flex items-center py-20 overflow-hidden">
      <!-- 背景渐变 -->
      <div class="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-teal-500/5 to-transparent"></div>
      
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-8">
            <span 
              class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-text-shimmer fade-in-element" 
              :class="{'visible': contentVisible}"
            >
              浩某的博客空间
            </span>
          </h1>
          
          <p 
            class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed fade-in-element" 
            :class="{'visible': contentVisible}" 
            style="transition-delay: 100ms;"
          >
            分享<span class="text-emerald-400 font-semibold">技术见解</span>、生活感悟和随手记录
            <br>记录成长，分享知识
          </p>
          
          <div 
            class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-element" 
            :class="{'visible': contentVisible}"
            style="transition-delay: 200ms;"
          >
            <router-link to="/tech" 
              class="group relative px-8 py-4 text-lg font-medium rounded-lg overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white transform hover:scale-105 transition-all duration-300">
              <div class="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300"></div>
              <span class="relative">浏览文章</span>
            </router-link>
            
            <router-link to="/about" 
               class="group px-8 py-4 text-lg font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
              关于我
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- 装饰效果 -->
      <div class="absolute left-0 top-1/4 w-72 h-72 bg-emerald-500/30 rounded-full filter blur-[100px] animate-blob"></div>
      <div class="absolute right-0 bottom-1/4 w-72 h-72 bg-teal-500/30 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
    </section>
    
    <!-- 最新文章部分 -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">
          <span class="gradient-text">最新文章</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 文章卡片 - 技术分享 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">技术分享</span>
                <span class="ml-2">2025-06-15</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Vue3 组合式API实战指南</h3>
              <p class="text-gray-400 text-sm mb-4">深入探讨Vue3组合式API的优势与实际应用场景，从基础概念到高级技巧，全面提升开发效率...</p>
              <router-link to="/tech" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- 文章卡片 - 技术分享 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">技术分享</span>
                <span class="ml-2">2025-05-28</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">TypeScript高级类型体操详解</h3>
              <p class="text-gray-400 text-sm mb-4">探索TypeScript类型系统的强大能力，从条件类型到映射类型，掌握类型编程的核心技巧...</p>
              <router-link to="/tech" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- 文章卡片 - 生活感悟 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">生活感悟</span>
                <span class="ml-2">2025-06-02</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">高效时间管理的五个关键习惯</h3>
              <p class="text-gray-400 text-sm mb-4">分享我在工作与生活中实践的时间管理方法，如何在繁忙的日程中找到平衡点，提升效率与幸福感...</p>
              <router-link to="/life" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- 文章卡片 - 随手一记 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">随手一记</span>
                <span class="ml-2">2025-06-10</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">程序员必备的10个命令行工具</h3>
              <p class="text-gray-400 text-sm mb-4">收集整理了日常开发中最常用的命令行工具，这些小工具能大幅提升工作效率，让开发更加顺畅...</p>
              <router-link to="/notes" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- 文章卡片 - 技术分享 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">技术分享</span>
                <span class="ml-2">2025-05-20</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Web应用安全最佳实践指南</h3>
              <p class="text-gray-400 text-sm mb-4">从前端到后端，全面解析Web应用中常见的安全漏洞与防护措施，保护你的应用免受攻击...</p>
              <router-link to="/tech" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
          
          <!-- 文章卡片 - 生活感悟 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <svg class="h-16 w-16 text-emerald-400/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-xs text-gray-400 mb-2">
                <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">生活感悟</span>
                <span class="ml-2">2025-05-15</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">远程工作一年后的思考与总结</h3>
              <p class="text-gray-400 text-sm mb-4">分享我在远程工作环境中的经验、挑战与收获，以及如何保持高效率和良好的工作生活平衡...</p>
              <router-link to="/life" class="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/tech" class="inline-block px-6 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
            查看更多文章
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- 分类标签部分 -->
    <section class="py-20 bg-gray-800/30 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">
          <span class="gradient-text">文章分类</span>
        </h2>
        
        <div class="max-w-4xl mx-auto">
          <!-- 前端开发分类 -->
          <div class="mb-10">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">前端开发</h3>
            <div class="flex flex-wrap gap-3">
              <router-link 
                v-for="(tag, index) in ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular', 'CSS/SCSS', 'TailwindCSS', 'WebGL', '性能优化', '前端工程化']" 
                :key="'frontend-'+index"
                to="/tech"
                class="px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-sm text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>
          
          <!-- 后端开发分类 -->
          <div class="mb-10">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">后端开发</h3>
            <div class="flex flex-wrap gap-3">
              <router-link 
                v-for="(tag, index) in ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby', 'RESTful API', 'GraphQL', '微服务', 'Docker']" 
                :key="'backend-'+index"
                to="/tech"
                class="px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-sm text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>
          
          <!-- 数据库与存储 -->
          <div class="mb-10">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">数据库与存储</h3>
            <div class="flex flex-wrap gap-3">
              <router-link 
                v-for="(tag, index) in ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'ORM', 'SQL优化']" 
                :key="'db-'+index"
                to="/tech"
                class="px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-sm text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>
          
          <!-- 云计算与DevOps -->
          <div class="mb-10">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">云计算与DevOps</h3>
            <div class="flex flex-wrap gap-3">
              <router-link 
                v-for="(tag, index) in ['AWS', 'Azure', 'GCP', 'Kubernetes', 'CI/CD', 'Serverless', '监控', '日志管理', '安全']" 
                :key="'cloud-'+index"
                to="/tech"
                class="px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-sm text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>
          
          <!-- 人工智能与机器学习 -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-emerald-400">人工智能与机器学习</h3>
            <div class="flex flex-wrap gap-3">
              <router-link 
                v-for="(tag, index) in ['深度学习', 'TensorFlow', 'PyTorch', '自然语言处理', '计算机视觉', '强化学习', '大模型应用']" 
                :key="'ai-'+index"
                to="/tech"
                class="px-3 py-1.5 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-sm text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 订阅部分 -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 class="text-3xl font-bold mb-4 text-center">
            <span class="gradient-text">订阅我的博客</span>
          </h2>
          <p class="text-gray-300 text-center mb-6">
            输入您的邮箱地址，获取最新文章和更新通知
          </p>
          
          <form @submit.prevent class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="您的邮箱地址" 
              class="flex-1 px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent"
              required
            >
            <button 
              type="submit"
              class="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all duration-300"
            >
              订阅
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 控制内容是否可见
const contentVisible = ref(false);

onMounted(() => {
  // 延迟500毫秒后显示内容
  setTimeout(() => {
    contentVisible.value = true;
  }, 500);
});
</script>

<style scoped>
/* 文章卡片图片容器 */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* 淡入效果 */
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 