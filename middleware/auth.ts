import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    // 直接返回 true，模拟认证成功
    return true;
});