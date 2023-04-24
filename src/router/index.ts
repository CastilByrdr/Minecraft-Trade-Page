import CreatePost from "@/components/CreatePost.vue";
import ItemCategories from "@/views/ItemCategories.vue";
import ListFoods from "@/views/ListFoods.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import TradeItems from "@/views/TradeItems.vue";
import UserProfile from "@/views/UserProfile.vue";
import Users from "@/views/Users.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "./RouterGuard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/listFoods",
      name: "listFoods",
      component: ListFoods,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
      beforeEnter: authGuard,
    },
    {
      path:'/serverPage',
      name: "serverPage",
      component: ServerPage
    },
    {
      path: "/userProfile",
      name: "userProfile",
      component: UserProfile,
      beforeEnter: authGuard,
    },
    {
      path:'/createPost',
      name: 'createPost',
      component: CreatePost
    }, 
    {
      path: '/itemCategories',
      name: 'itemCategories',
      component: ItemCategories
    }, 
    {
      path: '/tradeItems',
      name: 'tradeItems',
      component: TradeItems
    },
    {
      path: "/createPost",
      name: "createPost",
      component: CreatePost,
    },
    {
      path: "/itemCategories",
      name: "itemCategories",
      component: ItemCategories,
    },
    {
      path: "/tradeItems",
      name: "tradeItems",
      component: TradeItems,
    },
  ],
});
export default router;

export const Router = {
  async goToHomePage() {
    await router.push("/");
  },
};
