import App from "@/App.vue";
import LoginScreen from "@/views/LoginScreen.vue";
import RegisterScreen from "@/views/RegisterScreen.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: App, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: LoginScreen },
    { path: '/register', name: 'Register', component: RegisterScreen },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // TODO jwt verfication
})

export default router;