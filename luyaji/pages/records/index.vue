<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">钓鱼记录</h1>
      <NuxtLink to="/records/new" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        新建记录
      </NuxtLink>
    </div>

    <!-- 筛选和搜索 -->
    <div class="bg-base-200 p-4 rounded-lg mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">搜索</span>
          </label>
          <input type="text" placeholder="搜索..." class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">鱼种</span>
          </label>
          <select class="select select-bordered w-full">
            <option disabled selected>选择鱼种</option>
            <option>黑鱼</option>
            <option>翘嘴</option>
            <option>鲈鱼</option>
            <option>桂花</option>
            <option>其他</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">时间段</span>
          </label>
          <select class="select select-bordered w-full">
            <option disabled selected>选择时间</option>
            <option>今天</option>
            <option>本周</option>
            <option>本月</option>
            <option>今年</option>
            <option>所有时间</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="btn btn-sm">重置</button>
        <button class="btn btn-sm btn-primary ml-2">应用筛选</button>
      </div>
    </div>

    <!-- 空状态 -->
    <div class="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
      <h3 class="mt-4 text-xl font-medium text-gray-500">暂无钓鱼记录</h3>
      <p class="mt-1 text-gray-400">点击"新建记录"按钮开始记录您的钓鱼活动</p>
      <div class="mt-6">
        <NuxtLink to="/records/new" class="btn btn-primary">
          立即创建第一条记录
        </NuxtLink>
      </div>
    </div>

    <!-- 记录列表示例（目前隐藏） -->
    <div class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 记录卡片示例 -->
      <div class="record-card">
        <figure class="h-48 bg-gray-200 relative">
          <img src="https://placehold.co/600x400/0ea5e9/FFFFFF?text=钓鱼照片" alt="钓鱼照片" class="w-full h-full object-cover" />
          <div class="absolute top-2 right-2 badge badge-primary">黑鱼</div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">南湖公园钓鱼</h2>
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>2023-06-15</span>
          </div>
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>南湖公园</span>
          </div>
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="scene-tag">溪流</span>
            <span class="scene-tag">清晨</span>
          </div>
          <div class="card-actions justify-end">
            <NuxtLink to="/records/1" class="btn btn-sm btn-ghost">查看详情</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 可以添加更多记录卡片 -->
    </div>

    <!-- 分页控件（目前隐藏） -->
    <div class="hidden join flex justify-center mt-8">
      <button class="join-item btn">«</button>
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">»</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 记录列表页面逻辑
</script>

<style scoped>
/* 记录列表页面样式 */
</style> 