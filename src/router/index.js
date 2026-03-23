import App from "@/App.vue";
import LoginScreen from "@/views/LoginScreen.vue";
import RegisterScreen from "@/views/RegisterScreen.vue";
import {createRouter, createWebHistory} from "vue-router";
import TechDashboardScreen from "@/views/TechDashboardScreen.vue";
import ClientDashboardScreen from "@/views/ClientDashboardScreen.vue";
import CreateTicketScreen from "@/views/CreateTicketScreen.vue";

const routes = [
    { path: '/', name: 'Home', component: App, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: LoginScreen, meta: { requiresAuth: false } },
    { path: '/register', name: 'Register', component: RegisterScreen, meta: { requiresAuth: false } },
    { path: '/tech/dashboard', name: 'TechDashboard', component: TechDashboardScreen, meta: { requiresAuth: true } },
    { path: '/client/dashboard', name: 'ClientDashboard', component: ClientDashboardScreen, meta: { requiresAuth: true } },
    { path: '/tickets/create', name: 'CreateTicket', component: CreateTicketScreen, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = !!useTokenStore().getToken();
//     if (!isAuthenticated && to.meta.requiresAuth) {
//         next('/login');
//     }
// })

export default router;