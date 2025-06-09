<template>
  <div class="app-container">
    <!-- 全局流星背景 -->
    <falling-stars-background 
      color="6, 182, 212" 
      :count="150" 
      :speed="2"
      :trail-length="25" 
      class="z-0"
    />
    
    <!-- 聚光灯效果 -->
    <div class="spotlight spotlight-left"></div>
    <div class="spotlight spotlight-right"></div>
    
    <!-- 导航栏 -->
    <nav-bar />
    
    <!-- 主内容区 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import FallingStarsBackground from './components/FallingStarsBackground.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

// 页面加载动画
onMounted(() => {
  // 先隐藏内容
  gsap.set('.main-content', { opacity: 0, y: 20 })
  
  // 延迟显示内容，创建缓缓显示的效果
  gsap.to('.main-content', { 
    opacity: 1, 
    y: 0, 
    duration: 1.2, 
    ease: 'power3.out',
    delay: 0.3
  })
  
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #000;
  overflow-x: hidden;
}

.app-container {
  min-height: 100vh;
  position: relative;
}

.main-content {
  padding-top: 60px; /* 为导航栏留出空间 */
  min-height: calc(100vh - 60px);
  position: relative;
  z-index: 1;
}

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

/* 页面过渡动画 */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 全局样式 */
a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

/* 固定位置样式 */
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

/* 动态背景渐变 */
.bg-gradient-animation {
  background: linear-gradient(-45deg, #0ea5e9, #06b6d4, #38bdf8, #0284c7);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-text {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes text-shimmer {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.animate-text-shimmer {
  animation: text-shimmer 3s ease-in-out infinite;
  background-size: 200% auto;
}
</style> 