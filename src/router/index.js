import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/pages/Login.vue'
import Dashboard from '../components/Dashboard'
import Products from '../components/pages/Products'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		redirect: 'login',
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {requiresAuth: true}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/admin',
		name: 'Dashboard',
		component: Dashboard,
		children: [
			{
				path: 'products',
				name: 'Products',
				component: Products,
				meta: {requiresAuth: true},
			},
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
