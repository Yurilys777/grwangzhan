<template>
  <nav class="fixed top-0 left-0 right-0 w-full z-[9999999] bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo (靠左) -->
        <div class="flex-shrink-0 w-1/4">
          <router-link to="/" class="text-xl font-bold">
            <span class="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-transparent bg-clip-text font-extrabold tracking-wider hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300">
              浩某的博客
            </span>
          </router-link>
        </div>

        <!-- 导航链接 (居中) -->
        <div class="hidden md:flex justify-center w-2/4">
          <div class="flex items-center justify-center space-x-3">
            <router-link 
              v-for="(item, index) in navItems" 
              :key="index"
              :to="item.path"
                class="text-gray-300 hover:text-white px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200 whitespace-nowrap"
                :class="{ 'text-white bg-gray-800': isRouteActive(item.path) }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- 右侧功能区 -->
        <div class="hidden md:flex items-center justify-end w-1/4 space-x-6">
          <!-- 搜索图标 -->
          <button 
            @click="handleSearchClick" 
            class="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
          <!-- 登录/注册按钮 -->
          <div class="flex items-center space-x-2">
            <router-link to="/login" class="text-xs text-gray-300 hover:text-white transition-colors duration-200">
              登录
            </router-link>
            <span class="text-gray-600">/</span>
            <router-link to="/register" class="text-xs text-gray-300 hover:text-white transition-colors duration-200">
              注册
            </router-link>
          </div>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isOpen = !isOpen"
            class="text-gray-300 hover:text-white p-2"
          >
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div 
        v-show="isOpen" 
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            :class="{ 'text-white bg-gray-800': isRouteActive(item.path) }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
          
          <!-- 移动端显示登录/注册 -->
          <div class="flex items-center space-x-2 px-3 py-2">
            <router-link to="/login" class="text-gray-300 hover:text-white transition-colors duration-200" @click="isOpen = false">
              登录
            </router-link>
            <span class="text-gray-600">/</span>
            <router-link to="/register" class="text-gray-300 hover:text-white transition-colors duration-200" @click="isOpen = false">
              注册
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <!-- 全屏搜索框 -->
  <div 
    v-if="searchVisible" 
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] transition-opacity duration-300"
    @click="closeSearch"
  >
    <div 
      class="max-w-2xl w-full mx-4 transform transition-all duration-300 scale-search scale-100"
      @click.stop
    >
      <form @submit.prevent="handleSearch" class="relative">
        <div class="relative">
          <input 
            ref="searchInput"
            v-model="searchQuery" 
            type="text" 
            placeholder="输入关键词搜索..." 
            class="w-full bg-gray-800/80 backdrop-blur-xl text-white text-lg px-6 py-4 pr-14 rounded-xl border border-gray-700/50 shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            @keydown.esc="closeSearch"
          />
          <button 
            type="submit"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white p-2 rounded-lg transition-all duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div class="text-gray-400 text-sm mt-2 text-center">按 ESC 键关闭</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const searchVisible = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)

const navItems = [
  { name: '首页', path: '/' },
  { name: '技术分享', path: '/tech' },
  { name: '生活感悟', path: '/life' },
  { name: '随手一记', path: '/notes' },
  { name: '个人资料', path: '/about' },
  { name: '留言板', path: '/message' }
]

// 搜索相关功能
const handleSearchClick = () => {
  searchVisible.value = true
  document.body.style.overflow = 'hidden'
  
  // 等待DOM更新后聚焦输入框
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const closeSearch = () => {
  searchVisible.value = false
  document.body.style.overflow = ''
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 这里可以添加实际的搜索逻辑，现在只是跳转到首页
    router.push('/')
    
    // 重置搜索框
    searchQuery.value = ''
    closeSearch()
  }
}

// 添加ESC键关闭搜索框
const handleEscKey = (event) => {
  if (event.key === 'Escape' && searchVisible.value) {
    closeSearch()
  }
}

// 组件生命周期钩子 - 确保事件监听器的添加和移除
onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey)
  // 确保离开页面时恢复滚动
  document.body.style.overflow = ''
})

const isRouteActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
/* 搜索框动画 */
.scale-search {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-100 {
  transform: scale(1);
}

.scale-95 {
  transform: scale(0.95);
}

.opacity-100 {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}
</style> 