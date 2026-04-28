import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '@/views/LoginScreen.vue';
import RegisterScreen from '@/views/RegisterScreen.vue';
import CreateTicketScreen from '@/views/CreateTicketScreen.vue';
import HomeScreen from '@/views/HomeScreen.vue';
import DashboardScreen from '@/views/DashboardScreen.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeScreen, meta: { requiresAuth: false } },
    { path: '/login', name: 'Login', component: LoginScreen, meta: { requiresAuth: false } },
    { path: '/register', name: 'Register', component: RegisterScreen, meta: { requiresAuth: false } },
    { path: '/dashboard', name: 'Dashboard', component: DashboardScreen, meta: { requiresAuth: true } },
    { path: '/tickets/create', name: 'CreateTicket', component: CreateTicketScreen, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     const tokenStore = useTokenStore();
//     const isAuthenticated = !!tokenStore.token;
//
//     if (!isAuthenticated && to.meta.requiresAuth) {
//         return '/login';
//     }  else if (isAuthenticated && (to.name === 'Login' || to.name === 'Register')) {
//         return '/dashboard';
//     }
// });

export default router;