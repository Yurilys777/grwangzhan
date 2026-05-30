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
    
    <!-- 页面标题 -->
    <div class="py-16 bg-gradient-to-b from-gray-900 to-transparent relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500 mb-4">随手一记</h1>
        <p class="text-gray-300 text-center max-w-3xl mx-auto">
          记录日常的灵感、想法和笔记，不拘形式，随心而写。
        </p>
      </div>
    </div>
    
    <!-- 笔记列表 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- 笔记过滤器 -->
      <div class="flex flex-wrap items-center gap-2 mb-8 max-w-5xl mx-auto">
        <span class="text-gray-400">筛选：</span>
        <button class="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">全部</button>
        <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-colors">灵感</button>
        <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-colors">代码片段</button>
        <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-colors">学习笔记</button>
        <button class="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400 transition-colors">日常记录</button>
      </div>
      
      <!-- 笔记卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <!-- 笔记卡片 -->
        <div v-for="i in 9" :key="i" class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 group">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs">{{ ['灵感', '代码片段', '学习笔记', '日常记录'][i % 4] }}</span>
              <span class="text-xs text-gray-400">{{ i === 1 ? '2025-06-15' : i === 2 ? '2025-06-12' : i === 3 ? '2025-06-08' : new Date(Date.now() - i * 86400000).toLocaleDateString() }}</span>
            </div>
            
            <h3 class="text-lg font-bold mb-3 group-hover:text-violet-400 transition-colors">{{ 
              i === 1 ? 'Tailwind CSS 渐变文本效果技巧' : 
              i === 2 ? 'Vue3 响应式系统原理解析' : 
              i === 3 ? 'Git 工作流最佳实践总结' :
              i === 4 ? 'Docker 容器化部署笔记' :
              i === 5 ? '前端性能优化清单' :
              i === 6 ? '读书笔记：《原子习惯》' :
              i === 7 ? 'VS Code 提升效率的10个扩展' :
              i === 8 ? 'MongoDB 聚合管道实用技巧' :
              i === 9 ? '前端项目自动化测试策略' :
              ['设计灵感收集', 'React Hooks 使用技巧', '读书笔记：深入理解ES6', '今日所思所想', '有趣的CSS技巧', '效率工具分享', '周末学习计划', '项目开发记录', '解决方案记录'][i-1] 
            }}</h3>
            
            <div class="text-gray-300 text-sm mb-4">
              <p v-if="i === 1">
                今天在项目中实现了一个漂亮的文本渐变效果，记录一下实现方法：<br>
                1. 使用 <code class="bg-gray-900/50 px-1 rounded">bg-clip-text text-transparent</code> 作为基础<br>
                2. 添加 <code class="bg-gray-900/50 px-1 rounded">bg-gradient-to-r from-violet-500 to-fuchsia-500</code><br>
                3. 可以通过 <code class="bg-gray-900/50 px-1 rounded">animate-text-shimmer</code> 添加动画效果
              </p>
              
              <pre v-if="i === 2" class="bg-gray-900/50 p-3 rounded-lg text-xs overflow-x-auto mb-2"><code>// Vue3 响应式核心原理简化实现
const targetMap = new WeakMap()

function track(target, key) {
  // 依赖收集
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(activeEffect) // 添加当前活跃的副作用函数
}</code></pre>
              
              <p v-if="i === 3">
                Git 工作流最佳实践总结：<br>
                1. 使用 feature 分支进行功能开发<br>
                2. 提交前使用 git rebase -i 整理提交历史<br>
                3. 提交信息遵循约定式提交规范 (feat/fix/docs/style/refactor)<br>
                4. 使用 git hooks 强制代码质量检查<br>
                5. 主分支保护，通过 PR 和 code review 合并
              </p>

              <p v-if="i === 4">
                Docker 容器化部署笔记：<br>
                1. 使用多阶段构建减小镜像体积<br>
                2. 基础镜像选择 alpine 版本<br>
                3. 使用 .dockerignore 排除不需要的文件<br>
                4. 非 root 用户运行容器<br>
                5. 使用 Docker Compose 管理多容器应用
              </p>

              <pre v-if="i === 5" class="bg-gray-900/50 p-3 rounded-lg text-xs overflow-x-auto mb-2"><code>// 前端性能优化清单
1. 资源优化
   - 压缩代码 (JS/CSS/HTML)
   - 图片优化 (WebP, 响应式图片)
   - 懒加载资源
   
2. 渲染优化
   - 避免重排/重绘
   - 虚拟列表渲染大数据
   - 使用 CSS 硬件加速

3. 网络优化
   - HTTP/2
   - 预加载关键资源
   - 合理使用缓存策略</code></pre>

              <p v-if="i === 6">
                《原子习惯》读书笔记：<br>
                核心观点：微小的改变和习惯会带来巨大的成果。1%的每日改进，一年后会提升37倍。<br>
                习惯养成四法则：<br>
                1. 明显的提示 (Cue)<br>
                2. 有吸引力的渴望 (Craving)<br>
                3. 简单易行的响应 (Response)<br>
                4. 令人满足的奖励 (Reward)
              </p>

              <p v-if="i === 7">
                VS Code 提升效率的10个扩展：<br>
                1. GitHub Copilot - AI 代码辅助<br>
                2. GitLens - Git 增强功能<br>
                3. Prettier - 代码格式化<br>
                4. ESLint - 代码质量检查<br>
                5. Error Lens - 内联错误显示<br>
                6. Code Spell Checker - 拼写检查<br>
                7. Auto Rename Tag - 自动重命名标签<br>
                8. Path Intellisense - 路径自动完成<br>
                9. REST Client - API 测试<br>
                10. Live Share - 实时协作
              </p>

              <pre v-if="i === 8" class="bg-gray-900/50 p-3 rounded-lg text-xs overflow-x-auto mb-2"><code>// MongoDB 聚合管道实用技巧
db.orders.aggregate([
  // 1. 筛选匹配的文档
  { $match: { status: "completed" } },
  
  // 2. 按日期分组并计算统计信息
  { $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$orderDate" } },
      totalSales: { $sum: "$total" },
      count: { $sum: 1 }
  }},
  
  // 3. 按销售额排序
  { $sort: { totalSales: -1 } },
  
  // 4. 限制结果数量
  { $limit: 10 }
])</code></pre>

              <p v-if="i === 9">
                前端项目自动化测试策略：<br>
                1. 单元测试 (Jest) - 测试独立函数和组件<br>
                2. 组件测试 (Testing Library) - 测试组件交互<br>
                3. 端到端测试 (Cypress) - 测试完整用户流程<br>
                4. 视觉回归测试 (Percy) - 检测UI变化<br>
                5. 性能测试 (Lighthouse CI) - 监控性能指标<br>
                6. 测试覆盖率目标：单元测试 > 80%, E2E覆盖关键路径
              </p>
              
              <p v-if="i % 4 === 0 && i > 9" class="mb-2">今天看到一个很有意思的设计，记录下来：</p>
              <p v-if="i % 4 === 0 && i > 9" class="mb-2">- 使用渐变色作为背景</p>
              <p v-if="i % 4 === 0 && i > 9">- 圆角边框配合阴影效果</p>
              
              <pre v-if="i % 4 === 1 && i > 9" class="bg-gray-900/50 p-3 rounded-lg text-xs overflow-x-auto mb-2"><code>const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  // 更多代码...
}</code></pre>
              
              <p v-if="i % 4 === 2 && i > 9">《深入理解ES6》第三章笔记：箭头函数不仅仅是语法糖，它还有词法this绑定等特性，使用时需要注意以下几点...</p>
              
              <p v-if="i % 4 === 3 && i > 9">今天完成了项目的核心功能，遇到了一些问题但都顺利解决了。明天计划开始优化用户界面，提升用户体验。</p>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="text-xs text-gray-400 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  {{ i === 1 ? 24 : i === 2 ? 18 : i === 3 ? 15 : i === 4 ? 13 : i === 5 ? 11 : i === 6 ? 9 : i === 7 ? 8 : i === 8 ? 7 : i === 9 ? 6 : 5 + i }}
                </span>
                <span class="text-xs text-gray-400 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                  {{ i === 1 ? 12 : i === 2 ? 8 : i === 3 ? 6 : i === 4 ? 5 : i === 5 ? 4 : i === 6 ? 3 : i === 7 ? 3 : i === 8 ? 2 : i === 9 ? 2 : 2 + i }}
                </span>
              </div>
              
              <router-link to="/" class="text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors">
                查看详情
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
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-violet-500/20 text-sm font-medium text-violet-400">1</a>
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
  background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
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

/* 添加媒体查询，优化移动端显示 */
@media (max-width: 768px) {
  .spotlight {
    width: 20vw; /* 减小聚光灯宽度 */
  }
  
  .spotlight-left {
    left: -10vw; /* 调整左侧聚光灯位置 */
  }
  
  .spotlight-right {
    right: -10vw; /* 调整右侧聚光灯位置 */
  }
}

/* 小屏幕设备进一步优化 */
@media (max-width: 480px) {
  .spotlight {
    display: none; /* 在小屏幕设备上完全隐藏聚光灯效果 */
  }
}

/* 确保页面容器不会溢出 */
.container {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}
</style> 