<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">数据分析</h1>
      <div class="flex gap-2">
        <select class="select select-bordered select-sm">
          <option disabled selected>时间范围</option>
          <option>本周</option>
          <option>本月</option>
          <option>今年</option>
          <option>所有时间</option>
        </select>
        <button class="btn btn-primary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          导出
        </button>
      </div>
    </div>

    <!-- 数据概览卡片 -->
    <div class="stats shadow w-full mb-6">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div class="stat-title">记录总数</div>
        <div class="stat-value text-primary">0</div>
        <div class="stat-desc">↗︎ 0% (0)</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="stat-title">成功率</div>
        <div class="stat-value text-secondary">0%</div>
        <div class="stat-desc">↗︎ 0% (0)</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div class="stat-title">钓点数量</div>
        <div class="stat-value">0</div>
        <div class="stat-desc">↗︎ 0% (0)</div>
      </div>
    </div>

    <!-- 空状态 -->
    <div class="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <h3 class="mt-4 text-xl font-medium text-gray-500">暂无分析数据</h3>
      <p class="mt-1 text-gray-400">记录您的钓鱼活动，系统将自动为您生成分析数据</p>
      <div class="mt-6">
        <NuxtLink to="/records/new" class="btn btn-primary">
          立即记录钓鱼活动
        </NuxtLink>
      </div>
    </div>

    <!-- 分析图表（目前隐藏） -->
    <div class="hidden">
      <!-- 成功率分析 -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">成功率分析</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card bg-base-100 shadow-md">
            <div class="card-body">
              <h3 class="card-title">按鱼种</h3>
              <div class="chart-container">
                <!-- 图表将在这里显示 -->
                <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                  <span class="text-gray-500">饼图</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-md">
            <div class="card-body">
              <h3 class="card-title">按时间</h3>
              <div class="chart-container">
                <!-- 图表将在这里显示 -->
                <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                  <span class="text-gray-500">折线图</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 装备效能 -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">装备效能</h2>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">装备组合对比</h3>
            <div class="chart-container h-[400px]">
              <!-- 图表将在这里显示 -->
              <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                <span class="text-gray-500">雷达图</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 钓点热力 -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">钓点分析</h2>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">钓点热力图</h3>
            <div class="map-container">
              <!-- 地图将在这里显示 -->
              <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                <span class="text-gray-500">地图加载中...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 时间规律 -->
      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">时间规律</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card bg-base-100 shadow-md">
            <div class="card-body">
              <h3 class="card-title">日时段活跃度</h3>
              <div class="chart-container">
                <!-- 图表将在这里显示 -->
                <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                  <span class="text-gray-500">柱状图</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-md">
            <div class="card-body">
              <h3 class="card-title">月度活跃度</h3>
              <div class="chart-container">
                <!-- 图表将在这里显示 -->
                <div class="bg-gray-100 w-full h-full flex items-center justify-center">
                  <span class="text-gray-500">折线图</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 数据分析页面逻辑
</script>

<style scoped>
/* 数据分析页面样式 */
</style> 