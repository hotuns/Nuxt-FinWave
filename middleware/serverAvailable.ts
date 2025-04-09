import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    // 直接返回 true，模拟服务器可用
    return true;
});