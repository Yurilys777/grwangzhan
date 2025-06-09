<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  colorTheme: {
    type: String,
    default: 'all', // 默认绿色主题，可选值: green, blue, pink, purple，或者使用 'all' 显示所有颜色
    validator: (value) => ['green', 'blue', 'pink', 'purple', 'all'].includes(value)
  },
  count: {
    type: Number,
    default: 150
  },
  speed: {
    type: Number,
    default: 2
  },
  trailLength: {
    type: Number,
    default: 25
  }
})

const canvas = ref(null)
let ctx = null
let animationFrameId = null
let stars = []

// 颜色主题映射
const colorThemes = {
  green: ['16, 185, 129', '20, 184, 156'], // 绿色系
  blue: ['6, 182, 212', '59, 130, 246'],   // 蓝色系
  pink: ['236, 72, 153', '244, 114, 182'], // 粉红色系
  purple: ['139, 92, 246', '168, 85, 247'] // 紫色系
}

// 所有可用的主题名称
const allThemes = ['green', 'blue', 'pink', 'purple']

class Star {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    this.speed = Math.random() * props.speed + 0.5
    this.trail = []
    this.trailLength = Math.floor(Math.random() * props.trailLength) + 10
    this.opacity = Math.random() * 0.5 + 0.5
    
    // 根据 colorTheme 属性决定颜色选择
    if (props.colorTheme === 'all') {
      // 如果设置为 'all'，则随机选择一种颜色主题
      this.theme = allThemes[Math.floor(Math.random() * allThemes.length)]
    } else {
      // 否则使用指定的颜色主题
      this.theme = props.colorTheme
    }
    
    // 在选定的主题中随机选择一种色调
    this.colorIndex = Math.random() > 0.5 ? 0 : 1
    this.colors = colorThemes[this.theme]
  }

  move() {
    this.z -= this.speed
    if (this.z < 1) {
      this.z = 1000
      this.x = (Math.random() * 2000) - 1000
      this.y = (Math.random() * 2000) - 1000
      this.trail = []
      this.opacity = Math.random() * 0.5 + 0.5
      
      // 重置时重新随机选择颜色
      if (props.colorTheme === 'all') {
        this.theme = allThemes[Math.floor(Math.random() * allThemes.length)]
        this.colors = colorThemes[this.theme]
      }
      
      this.colorIndex = Math.random() > 0.5 ? 0 : 1
    }
  }

  draw() {
    const k = 128 / this.z
    const px = this.x * k + canvas.value.width / 2
    const py = this.y * k + canvas.value.height / 2

    // 添加轨迹点
    this.trail.push({ x: px, y: py })
    if (this.trail.length > this.trailLength) {
      this.trail.shift()
    }

    // 绘制轨迹
    if (this.trail.length > 1) {
      ctx.beginPath()
      ctx.moveTo(this.trail[0].x, this.trail[0].y)
      
      // 创建渐变效果
      const gradient = ctx.createLinearGradient(
        this.trail[0].x,
        this.trail[0].y,
        this.trail[this.trail.length - 1].x,
        this.trail[this.trail.length - 1].y
      )
      gradient.addColorStop(0, `rgba(${this.colors[this.colorIndex]}, 0)`)
      gradient.addColorStop(1, `rgba(${this.colors[this.colorIndex]}, ${this.opacity})`)
      
      for (let i = 1; i < this.trail.length; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y)
      }
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = (1 - this.z / 1000) * 3
      ctx.stroke()

      // 绘制发光效果
      ctx.shadowBlur = 20
      ctx.shadowColor = `rgba(${this.colors[this.colorIndex]}, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(px, py, (1 - this.z / 1000) * 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${this.colors[this.colorIndex]}, ${this.opacity})`
      ctx.fill()
      ctx.shadowBlur = 0
    }
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

const createStars = () => {
  stars = []
  for (let i = 0; i < props.count; i++) {
    const x = (Math.random() * 2000) - 1000
    const y = (Math.random() * 2000) - 1000
    const z = Math.random() * 1000
    stars.push(new Star(x, y, z))
  }
}

const animate = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
  
  stars.forEach(star => {
    star.move()
    star.draw()
  })
  
  animationFrameId = requestAnimationFrame(animate)
}

const handleResize = () => {
  initCanvas()
  createStars()
}

onMounted(() => {
  initCanvas()
  createStars()
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