<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="max-w-md w-full space-y-8 backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl z-10">
      <div>
        <div class="flex justify-center">
          <svg class="h-16 w-16 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="mt-4 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          注册账号
        </h2>
        <p class="mt-2 text-center text-sm text-white/80">
          已有账号？
          <router-link to="/login" class="font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
            立即登录
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-white/90 mb-1">用户名</label>
            <div class="relative">
              <div class="absolute left-3 top-3 text-emerald-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                class="appearance-none rounded-lg relative block w-full px-10 py-3 border border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="请输入用户名"
                v-model="username"
              >
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-white/90 mb-1">邮箱</label>
            <div class="relative">
              <div class="absolute left-3 top-3 text-emerald-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                class="appearance-none rounded-lg relative block w-full px-10 py-3 border border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="请输入邮箱"
                v-model="email"
              >
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-white/90 mb-1">密码</label>
            <div class="relative">
              <div class="absolute left-3 top-3 text-emerald-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-lg relative block w-full px-10 py-3 border border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="请输入密码"
                v-model="password"
              >
            </div>
          </div>
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-white/90 mb-1">确认密码</label>
            <div class="relative">
              <div class="absolute left-3 top-3 text-emerald-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                class="appearance-none rounded-lg relative block w-full px-10 py-3 border border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="请再次输入密码"
                v-model="confirmPassword"
              >
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
          >
            注 册
          </button>
        </div>
        
        <div v-if="errorMessage" class="bg-red-500/20 border border-red-500/30 text-red-100 px-4 py-3 rounded-lg text-sm text-center">
          {{ errorMessage }}
        </div>
        
        <div v-if="successMessage" class="bg-emerald-500/20 border border-emerald-500/30 text-emerald-100 px-4 py-3 rounded-lg text-sm text-center">
          {{ successMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')

// 处理注册
const handleRegister = () => {
  // 清除之前的消息
  errorMessage.value = ''
  successMessage.value = ''
  
  // 简单验证
  if (!username.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
    errorMessage.value = '请填写所有必填字段'
    return
  }
  
  if (password.value !== confirmPassword.value) {
    errorMessage.value = '两次输入的密码不一致'
    return
  }
  
  // 这里简化处理，不进行实际注册，直接显示成功
  successMessage.value = '注册成功！'
  
  // 3秒后跳转到登录页
  setTimeout(() => {
    router.push('/login')
  }, 2000)
}
</script>

<style>
/* 确保内容在背景之上 */
.relative {
  isolation: isolate;
}

/* 输入框自动填充样式优化 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.2) inset;
  transition: background-color 5000s ease-in-out 0s;
}

/* 公共类 */
.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.z-10 {
  z-index: 10;
}

.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}
</style> 