<template>
  <div class="falling-stars-background">
    <div class="stars">
      <div v-for="i in count" :key="i" class="star" :style="getStarStyle()"></div>
    </div>
    <div class="meteors">
      <div v-for="i in 20" :key="i" class="meteor" :style="getMeteorStyle()"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '#38bdf8'
  },
  count: {
    type: Number,
    default: 150
  }
});

// 生成随机星星样式
const getStarStyle = () => {
  const size = Math.random() * 2 + 1;
  const opacity = Math.random() * 0.7 + 0.3;
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${Math.random() * 3 + 1}s`,
    backgroundColor: props.color,
    boxShadow: `0 0 ${size + 2}px ${props.color}`
  };
};

// 生成随机流星样式
const getMeteorStyle = () => {
  const top = Math.random() * 60;
  const left = Math.random() * 100 + 10;
  const duration = Math.random() * 2 + 1;
  const delay = Math.random() * 15;
  const size = Math.random() * 200 + 100;
  const angle = Math.random() * 20 - 40; // -40 到 -20 度之间
  
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    opacity: Math.random() * 0.8 + 0.2,
    transform: `rotate(${angle}deg)`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    background: `linear-gradient(90deg, rgba(255, 255, 255, 0), ${props.color})`
  };
};

let animationFrame;
let stars = [];
let meteors = [];

// 添加星星闪烁效果
const animateStars = () => {
  if (!document.querySelector('.falling-stars-background')) return;
  
  stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    const newOpacity = Math.random() * 0.5 + 0.5;
    const newSize = Math.random() * 0.5 + 0.8;
    star.style.opacity = newOpacity;
    star.style.transform = `scale(${newSize})`;
  });
  
  animationFrame = requestAnimationFrame(() => {
    setTimeout(animateStars, 1000);
  });
};

onMounted(() => {
  setTimeout(animateStars, 1000);
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
.falling-stars-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: #0f172a;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(15, 23, 42, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(15, 23, 42, 0.8) 0%, transparent 50%);
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  border-radius: 50%;
  animation: twinkle 2s infinite alternate;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.meteors {
  position: absolute;
  width: 100%;
  height: 100%;
}

.meteor {
  position: absolute;
  height: 2px;
  filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.8));
  animation: meteor 3s linear infinite;
  opacity: 0;
}

@keyframes meteor {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(-200px) translateY(200px);
    opacity: 0;
  }
}
</style> 