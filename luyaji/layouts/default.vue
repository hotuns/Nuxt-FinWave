<template>
  <div class="flex flex-col min-h-screen">
    <!-- 顶部导航栏 -->
    <header class="navbar bg-base-100 shadow-md z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/records">记录</NuxtLink></li>
            <li><NuxtLink to="/equipment">装备</NuxtLink></li>
            <li><NuxtLink to="/analytics">分析</NuxtLink></li>
            <li><NuxtLink to="/social">社区</NuxtLink></li>
            <li><NuxtLink to="/tools">工具</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
          <span class="text-fishing-600">路亚记</span>
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/">首页</NuxtLink></li>
          <li><NuxtLink to="/records">记录</NuxtLink></li>
          <li><NuxtLink to="/equipment">装备</NuxtLink></li>
          <li><NuxtLink to="/analytics">分析</NuxtLink></li>
          <li><NuxtLink to="/social">社区</NuxtLink></li>
          <li><NuxtLink to="/tools">工具</NuxtLink></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">通知</span>
              <span class="text-info">暂无新通知</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">查看全部</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://ui-avatars.com/api/?name=路亚记&background=0EA5E9&color=fff" />
            </div>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NuxtLink to="/profile" class="justify-between">
                个人资料
                <span class="badge">新</span>
              </NuxtLink>
            </li>
            <li><NuxtLink to="/settings">设置</NuxtLink></li>
            <li><a>退出</a></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {{ new Date().getFullYear() }} - 路亚记 - 让每次钓鱼都值得记录</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 布局组件逻辑
</script>

<style scoped>
/* 布局组件样式 */
</style> 