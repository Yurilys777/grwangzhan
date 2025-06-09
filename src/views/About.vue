<template>
  <div>
    <!-- 粒子背景 -->
    <particles-background
      color-theme="purple"
      :particle-count="60"
      :connection-distance="120"
      :speed="0.2"
      class="!fixed inset-0 -z-10 opacity-50"
    />
    
    <!-- 添加聚光灯效果 -->
    <div class="spotlight spotlight-left"></div>
    <div class="spotlight spotlight-right"></div>
    
    <!-- 页面内容 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-5xl mx-auto">
        <!-- 个人信息卡片 -->
        <div class="bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl mb-12">
          <div class="md:flex">
            <!-- 左侧头像区域 -->
            <div class="md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center">
              <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <svg class="h-24 w-24 text-indigo-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            
            <!-- 右侧信息区域 -->
            <div class="md:w-2/3 p-8">
              <h1 class="text-3xl font-bold mb-2">浩某</h1>
              <p class="text-indigo-400 mb-4">全栈开发工程师 / 技术博主</p>
              
              <p class="text-gray-300 mb-6">
                热爱编程和技术分享的开发者，专注于Web前端和后端开发。喜欢探索新技术，乐于解决复杂问题。
                业余时间喜欢阅读、旅行和摄影，记录生活中的美好瞬间。
              </p>
              
              <div class="flex flex-wrap gap-3">
                <a href="#" class="flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a href="#" class="flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </a>
                <a href="#" class="flex items-center px-3 py-1 rounded-full bg-blue-700/20 text-blue-400 hover:bg-blue-700/30 transition-colors text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="#" class="flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 技能和经历部分 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- 技能部分 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">专业技能</h2>
            
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-300">前端开发</span>
                  <span class="text-sm font-medium text-indigo-400">90%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-300">后端开发</span>
                  <span class="text-sm font-medium text-indigo-400">85%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-300">UI/UX 设计</span>
                  <span class="text-sm font-medium text-indigo-400">75%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-300">数据库</span>
                  <span class="text-sm font-medium text-indigo-400">80%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-300">DevOps</span>
                  <span class="text-sm font-medium text-indigo-400">70%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width: 70%"></div>
                </div>
              </div>
            </div>
            
            <div class="mt-6">
              <h3 class="text-lg font-semibold mb-3">技术栈</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">JavaScript</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">TypeScript</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">React</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">Vue</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">Node.js</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">Express</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">MongoDB</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">MySQL</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">Docker</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">AWS</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">Git</span>
                <span class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-gray-300">TailwindCSS</span>
              </div>
            </div>
          </div>
          
          <!-- 经历部分 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">工作经历</h2>
            
            <div class="space-y-6">
              <div class="relative pl-8 pb-6 border-l border-gray-700">
                <div class="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1"></div>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">高级前端开发工程师</h3>
                  <span class="text-xs text-gray-400">2025 - 至今</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">ABC科技有限公司</p>
                <p class="text-gray-400 text-sm">负责公司核心产品的前端架构设计和开发，优化用户体验，提升产品性能。带领前端团队完成多个重要项目，推动前端技术栈升级。</p>
              </div>
              
              <div class="relative pl-8 pb-6 border-l border-gray-700">
                <div class="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1"></div>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">全栈开发工程师</h3>
                  <span class="text-xs text-gray-400">2025 - 2025</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">XYZ互联网公司</p>
                <p class="text-gray-400 text-sm">负责公司Web应用的前后端开发，参与产品设计和技术选型，实现了多个创新功能，提升了用户留存率和满意度。</p>
              </div>
              
              <div class="relative pl-8">
                <div class="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1"></div>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">前端开发实习生</h3>
                  <span class="text-xs text-gray-400">2025 - 2025</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">创新科技初创公司</p>
                <p class="text-gray-400 text-sm">参与公司官网和内部管理系统的前端开发，学习和应用前端技术栈，快速成长为团队核心成员。</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 教育背景 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-12">
          <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">教育背景</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">计算机科学与技术 - 学士学位</h3>
                  <span class="text-xs text-gray-400">2019 - 2025</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">xx大学</p>
                <p class="text-gray-400 text-sm">研究方向：Web前端技术与用户体验设计；主修课程：数据结构、算法设计、软件工程、数据库系统、计算机网络</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 联系方式 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">联系我</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">邮箱地址</p>
                <p class="text-lg text-white">2319251923@qq.com</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">所在地</p>
                <p class="text-lg text-white">中国，广东</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <router-link to="/message" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
              给我留言
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
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