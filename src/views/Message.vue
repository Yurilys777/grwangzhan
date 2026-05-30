<template>
  <div>
    
    
    <!-- 页面标题 -->
    <div class="py-16 bg-gradient-to-b from-gray-900 to-transparent relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center gradient-text mb-4">留言板</h1>
        <p class="text-gray-300 text-center max-w-3xl mx-auto">
          欢迎在这里留下您的想法、建议或问题，我会尽快回复。
        </p>
      </div>
    </div>
    
    <!-- 留言区域 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- 留言表单 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-12">
          <h2 class="text-2xl font-bold mb-6">发表留言</h2>
          
          <form @submit.prevent="submitMessage" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-1">您的昵称</label>
                <input
                  id="name"
                  type="text"
                  v-model="messageForm.name"
                  required
                  class="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
                  placeholder="请输入您的昵称"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">电子邮箱 (选填)</label>
                <input
                  id="email"
                  type="email"
                  v-model="messageForm.email"
                  class="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
                  placeholder="请输入您的邮箱"
                />
              </div>
            </div>
            
            <div>
              <label for="content" class="block text-sm font-medium text-gray-300 mb-1">留言内容</label>
              <textarea
                id="content"
                v-model="messageForm.content"
                rows="5"
                required
                class="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent resize-none"
                placeholder="请输入您的留言内容..."
              ></textarea>
            </div>
            
            <div class="flex justify-end">
              <button
                type="submit"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02]"
              >
                提交留言
              </button>
            </div>
          </form>
        </div>
        
        <!-- 留言列表 -->
        <div>
          <h2 class="text-2xl font-bold mb-6">最新留言</h2>
          
          <div class="space-y-6">
            <div v-for="(message, index) in messages" :key="index" class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {{ message.name.charAt(0).toUpperCase() }}
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium text-white">{{ message.name }}</h3>
                    <span class="text-xs text-gray-400">{{ message.date }}</span>
                  </div>
                  <p class="mt-2 text-gray-300">{{ message.content }}</p>
                  
                  <!-- 回复区域 -->
                  <div v-if="message.reply" class="mt-4 bg-gray-700/30 rounded-lg p-4">
                    <div class="flex items-center">
                      <div class="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                        博
                      </div>
                      <span class="ml-2 text-sm font-medium text-teal-400">博主回复</span>
                      <span class="ml-2 text-xs text-gray-400">{{ message.replyDate }}</span>
                    </div>
                    <p class="mt-2 text-gray-300 text-sm">{{ message.reply }}</p>
                  </div>
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
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-teal-500/20 text-sm font-medium text-teal-400">1</a>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FallingStarsBackground from '../components/FallingStarsBackground.vue'

// 留言表单
const messageForm = reactive({
  name: '',
  email: '',
  content: ''
})

// 模拟留言数据
const messages = ref([
  {
    name: '肖某',
    date: '2025-06-15 14:30',
    content: '博客内容很丰富，学到了很多知识，特别是关于Vue 3的那篇文章，解决了我项目中的一个难题，感谢分享！',
    reply: '谢谢支持，很高兴能帮到你！后续会继续更新Vue相关的内容。',
    replyDate: '2025-06-15 18:45'
  },
  {
    name: '李某',
    date: '2025-06-10 09:15',
    content: '博主的文章写得很详细，代码示例也很清晰。希望能多写一些关于React Hooks的文章。',
    reply: null,
    replyDate: null
  },
  {
    name: '王某',
    date: '2025-06-05 21:20',
    content: '偶然发现这个博客，界面设计很漂亮，内容也很专业。已经收藏了，期待更多优质内容！',
    reply: '感谢您的支持和鼓励！我会继续努力创作更多有价值的内容。',
    replyDate: '2025-06-06 10:30'
  }
])

// 提交留言
const submitMessage = () => {
  // 模拟提交成功
  alert('留言提交成功！')
  
  // 添加到留言列表（实际项目中应该是通过API提交到服务器）
  messages.value.unshift({
    name: messageForm.name,
    date: new Date().toLocaleString(),
    content: messageForm.content,
    reply: null,
    replyDate: null
  })
  
  // 重置表单
  messageForm.name = ''
  messageForm.email = ''
  messageForm.content = ''
}
</script> 