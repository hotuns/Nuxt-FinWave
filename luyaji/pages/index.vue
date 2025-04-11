<template>
  <div>
    <!-- 欢迎信息 -->
    <section class="hero bg-base-200 rounded-box mb-8">
      <div class="hero-content text-center py-8">
        <div class="max-w-md">
          <h1 class="text-4xl font-bold">欢迎使用路亚记</h1>
          <p class="py-6">记录每次钓鱼的精彩，分析装备效能，分享钓鱼乐趣，让每一次出钓都更加专业和有成效。</p>
          <button class="btn btn-primary">立即开始</button>
        </div>
      </div>
    </section>

    <!-- 主要功能卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <!-- 记录管理卡片 -->
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://placehold.co/600x200/0ea5e9/FFFFFF?text=钓鱼记录" alt="钓鱼记录" /></figure>
        <div class="card-body">
          <h2 class="card-title">记录管理</h2>
          <p>记录钓鱼时间、位置、鱼种等关键信息，上传照片，添加详细备注。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/records" class="btn btn-primary">立即记录</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 装备管理卡片 -->
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://placehold.co/600x200/10b981/FFFFFF?text=装备管理" alt="装备管理" /></figure>
        <div class="card-body">
          <h2 class="card-title">装备管理</h2>
          <p>创建和管理钓鱼装备组合，记录装备效能，找到最适合的搭配。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/equipment" class="btn btn-primary">查看装备</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 数据分析卡片 -->
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://placehold.co/600x200/6366f1/FFFFFF?text=数据分析" alt="数据分析" /></figure>
        <div class="card-body">
          <h2 class="card-title">数据分析</h2>
          <p>分析钓鱼成功率、装备效能、钓点热力图，助您提升钓鱼技巧。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/analytics" class="btn btn-primary">查看分析</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 次要功能卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <!-- 社区卡片 -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">社区互动</h2>
          <p>分享您的钓鱼记录，与钓友交流经验。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/social" class="btn btn-sm btn-ghost">进入社区</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 工具集卡片 -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">实用工具</h2>
          <p>地图标记、天气预报、水温预测等实用工具。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/tools" class="btn btn-sm btn-ghost">查看工具</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 设置卡片 -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">系统设置</h2>
          <p>隐私控制、数据管理、应用设置等。</p>
          <div class="card-actions justify-end">
            <NuxtLink to="/settings" class="btn btn-sm btn-ghost">前往设置</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats shadow w-full mb-8">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <div class="stat-title">记录总数</div>
        <div class="stat-value text-primary">0</div>
        <div class="stat-desc">开始记录您的钓鱼活动</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div class="stat-title">装备组合</div>
        <div class="stat-value text-secondary">0</div>
        <div class="stat-desc">创建您的钓鱼装备组合</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
          </svg>
        </div>
        <div class="stat-title">上传照片</div>
        <div class="stat-value">0</div>
        <div class="stat-desc">记录您的钓鱼成果</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 首页逻辑
</script>

<style scoped>
/* 首页样式 */
</style>