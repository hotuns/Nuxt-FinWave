<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">装备管理</h1>
      <NuxtLink to="/equipment/new" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        新建组合
      </NuxtLink>
    </div>

    <!-- 筛选和搜索 -->
    <div class="bg-base-200 p-4 rounded-lg mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">搜索</span>
          </label>
          <input type="text" placeholder="搜索装备组合..." class="input input-bordered w-full" />
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
            <span class="label-text">分类</span>
          </label>
          <select class="select select-bordered w-full">
            <option disabled selected>选择分类</option>
            <option>个人组合</option>
            <option>热门组合</option>
            <option>模板</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="btn btn-sm">重置</button>
        <button class="btn btn-sm btn-primary ml-2">应用筛选</button>
      </div>
    </div>

    <div class="tabs tabs-boxed mb-6">
      <a class="tab tab-active">我的组合</a>
      <a class="tab">热门组合</a>
      <a class="tab">模板库</a>
    </div>

    <!-- 空状态 -->
    <div class="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="mt-4 text-xl font-medium text-gray-500">暂无装备组合</h3>
      <p class="mt-1 text-gray-400">创建您的第一个装备组合</p>
      <div class="mt-6">
        <NuxtLink to="/equipment/new" class="btn btn-primary">
          立即创建装备组合
        </NuxtLink>
      </div>
    </div>

    <!-- 装备组合列表示例（目前隐藏） -->
    <div class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 装备组合卡片示例 -->
      <div class="equipment-card">
        <figure class="h-48 bg-gray-200 relative">
          <img src="https://placehold.co/600x400/10b981/FFFFFF?text=装备组合" alt="装备组合照片" class="w-full h-full object-cover" />
          <div class="absolute top-2 right-2 badge badge-accent">黑鱼专用</div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">溪流黑鱼套装</h2>
          <div class="flex items-center mb-2">
            <div class="equipment-rating">
              <span class="mr-1">成功率:</span>
              <div class="rating rating-sm">
                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-500">使用次数: 5</p>
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="scene-tag">溪流</span>
            <span class="scene-tag">夏季</span>
          </div>
          <div class="card-actions justify-end">
            <NuxtLink to="/equipment/1" class="btn btn-sm btn-ghost">查看详情</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 可以添加更多装备组合卡片 -->
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
// 装备管理页面逻辑
</script>

<style scoped>
/* 装备管理页面样式 */
</style> 