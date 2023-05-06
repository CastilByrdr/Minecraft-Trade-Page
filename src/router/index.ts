import CreatePost from "@/components/CreatePost.vue";
import About from "@/views/About.vue";
import ItemCategories from "@/views/ItemCategories.vue";
import ListFoods from "@/views/ListFoods.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import TradeLists from "@/views/TradeLists.vue";
import UserTradeList from "@/views/UserTradeList.vue";
import TradeMessage from "@/views/TradeMessage.vue";
import Users from "@/views/Users.vue";
import Settings from "@/components/Settings.vue";
import ServerPage from "@/views/ServerPage.vue";
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
      component: About,
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
      path: "/serverPage",
      name: "serverPage",
      component: ServerPage,
    },
    // {
    //   path: "/userProfile",
    //   name: "userProfile",
    //   component: UserProfile,
    //   beforeEnter: authGuard,
    // },
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
      path: "/tradeLists",
      name: "tradeLists",
      component: TradeLists,
      beforeEnter: authGuard,
    },
    {
      path: "/itemCategories",
      name: "itemCategories",
      component: ItemCategories,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      children: [
        {
          path:"/profile/createPost",
          name:"createPost",
          component: CreatePost,
          beforeEnter: authGuard,
        },
        {
          path: "/profile/userList",
          name: "userTradeList",
          component: UserTradeList,
          beforeEnter: authGuard,
        },
        {
          path: "/profile/message",
          name: "tradeMessage",
          component: TradeMessage,
          beforeEnter: authGuard,
        },
        {
          path:"/profile/settings",
          name:"settings",
          component: Settings,
          beforeEnter: authGuard,
        },
      ],
    },
  ],
});
export default router;

export const Router = {
  async goToHomePage() {
    await router.push("/");
  },
};
