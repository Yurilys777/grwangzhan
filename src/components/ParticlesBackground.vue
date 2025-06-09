<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  colorTheme: {
    type: String,
    default: 'green', // 默认绿色主题，可选值: green, blue, pink, purple
    validator: (value) => ['green', 'blue', 'pink', 'purple'].includes(value)
  },
  particleCount: {
    type: Number,
    default: 60
  },
  connectionDistance: {
    type: Number,
    default: 120
  },
  speed: {
    type: Number,
    default: 0.2
  }
})

const canvas = ref(null)
let ctx = null
let animationFrameId = null
let particles = []

// 颜色主题映射
const colorThemes = {
  green: '20, 184, 166', // 绿色主题
  blue: '6, 182, 212',   // 蓝色主题
  pink: '219, 39, 119',  // 粉色主题
  purple: '139, 92, 246' // 紫色主题
}

// 获取当前颜色
const getColor = () => {
  return colorThemes[props.colorTheme] || colorThemes.green
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.value.width
    this.y = Math.random() * canvas.value.height
    this.vx = (Math.random() - 0.5) * props.speed
    this.vy = (Math.random() - 0.5) * props.speed
    this.radius = Math.random() * 2 + 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    // 边界检测
    if (this.x < 0 || this.x > canvas.value.width) this.vx = -this.vx
    if (this.y < 0 || this.y > canvas.value.height) this.vy = -this.vy
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${getColor()}, 0.5)`
    ctx.fill()
  }
}

const initCanvas = () => {
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.value.getBoundingClientRect()
  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
  ctx = canvas.value.getContext('2d')
  ctx.scale(dpr, dpr)
}

const createParticles = () => {
  particles = []
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(new Particle())
  }
}

const drawConnections = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < props.connectionDistance) {
        const opacity = 1 - distance / props.connectionDistance
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${getColor()}, ${opacity * 0.2})`
        ctx.lineWidth = 1
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  // 更新和绘制所有粒子
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })
  
  // 绘制连接线
  drawConnections()
  
  animationFrameId = requestAnimationFrame(animate)
}

const handleResize = () => {
  initCanvas()
  createParticles()
}

onMounted(() => {
  initCanvas()
  createParticles()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}
</style> 