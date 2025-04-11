<template>
  <div>
    <div class="flex items-center mb-6">
      <NuxtLink to="/records" class="btn btn-ghost btn-sm mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </NuxtLink>
      <h1 class="text-2xl font-bold">新建钓鱼记录</h1>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <!-- 基础信息部分 -->
          <div class="divider">基础信息</div>

          <!-- 标题 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">标题</span>
              <span class="label-text-alt text-error">*</span>
            </label>
            <input type="text" placeholder="给您的钓鱼记录起个标题" class="input input-bordered w-full" required />
          </div>

          <!-- 日期时间 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">日期时间</span>
              <span class="label-text-alt text-error">*</span>
            </label>
            <input type="datetime-local" class="input input-bordered w-full" required />
          </div>

          <!-- 位置 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">位置</span>
              <span class="label-text-alt text-error">*</span>
            </label>
            <div class="input-group">
              <input type="text" placeholder="选择钓点位置" class="input input-bordered w-full" required />
              <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <div class="map-container mt-2">
              <!-- 地图将在这里显示 -->
              <div class="bg-gray-200 w-full h-full flex items-center justify-center">
                <span class="text-gray-500">地图加载中...</span>
              </div>
            </div>
          </div>

          <!-- 鱼种 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">鱼种</span>
              <span class="label-text-alt text-error">*</span>
            </label>
            <select class="select select-bordered w-full" required>
              <option disabled selected>选择鱼种</option>
              <option>黑鱼</option>
              <option>翘嘴</option>
              <option>鲈鱼</option>
              <option>桂花</option>
              <option>其他</option>
            </select>
          </div>

          <!-- 场景标签 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">场景标签</span>
            </label>
            <div class="flex flex-wrap gap-2">
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">溪流</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">湖泊</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">水库</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">江河</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">海钓</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">夜钓</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">船钓</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input type="checkbox" class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">岸钓</span> 
                </label>
              </div>
            </div>
          </div>

          <!-- 媒体记录部分 -->
          <div class="divider">媒体记录</div>

          <!-- 照片上传 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">照片上传</span>
              <span class="label-text-alt">最多3张</span>
            </label>
            <div class="grid grid-cols-3 gap-3">
              <div class="bg-base-200 aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-base-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span class="text-xs mt-2 text-gray-500">添加照片</span>
              </div>
              <!-- 这里会显示上传的照片预览 -->
            </div>
          </div>

          <!-- 装备关联部分 -->
          <div class="divider">装备关联</div>

          <!-- 选择装备组合 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">装备组合</span>
            </label>
            <select class="select select-bordered w-full">
              <option disabled selected>选择装备组合</option>
              <option>创建新组合...</option>
            </select>
          </div>

          <!-- 补充信息部分 -->
          <div class="divider">补充信息</div>

          <!-- 天气 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">天气状况</span>
            </label>
            <select class="select select-bordered w-full">
              <option disabled selected>选择天气</option>
              <option>晴天</option>
              <option>多云</option>
              <option>阴天</option>
              <option>小雨</option>
              <option>中雨</option>
              <option>大雨</option>
            </select>
          </div>

          <!-- 水温 -->
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">水温 (°C)</span>
            </label>
            <input type="number" placeholder="输入水温" class="input input-bordered w-full" />
          </div>

          <!-- 备注 -->
          <div class="form-control mb-6">
            <label class="label">
              <span class="label-text">备注</span>
            </label>
            <textarea class="textarea textarea-bordered h-24" placeholder="添加备注信息，如钓鱼心得、特殊情况等"></textarea>
          </div>

          <!-- 隐私设置 -->
          <div class="form-control mb-6">
            <label class="cursor-pointer label justify-start">
              <input type="checkbox" class="toggle toggle-primary mr-2" />
              <span class="label-text">公开分享此记录</span>
            </label>
            <label class="cursor-pointer label justify-start">
              <input type="checkbox" class="toggle toggle-primary mr-2" />
              <span class="label-text">在分享中模糊位置信息</span>
            </label>
          </div>

          <!-- 提交按钮 -->
          <div class="flex justify-end gap-2">
            <button type="button" class="btn btn-ghost" @click="$router.push('/records')">取消</button>
            <button type="submit" class="btn btn-primary">保存记录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 表单提交处理
const onSubmit = () => {
  // 此处添加表单提交逻辑
  // 完成后跳转到记录列表
  // router.push('/records')
}
</script>

<style scoped>
/* 新建记录页面样式 */
</style> 