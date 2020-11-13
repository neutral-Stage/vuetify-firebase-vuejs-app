import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import goTo from "vuetify/es5/services/goto";
import { fb } from "./firebase";

Vue.use(Router);
// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // specify offset of the element
      if (to.hash === "#anchor2") {
        position.offset = { y: 100 };
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position;
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise((resolve) => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some((m) => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once("triggerScroll", () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position);
      });
    });
  }
};
const router = new Router({
  mode: "history",
  scrollBehavior,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/test.vue"),
    },

    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/donate",
      name: "donate",
      // component: Home
      component: () => import("./views/Donate.vue"),
    },
    {
      path: "/program",
      name: "program",
      component: () => import("./views/Program.vue"),
    },

    {
      path: "/gallery",
      name: "gallery",
      component: () => import("./views/Gallery.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      meta: { requiresAuth: true },
      component: () => import("./views/Admin.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("./components/back/Dashboard.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("./components/back/Products.vue"),
        },
        {
          path: "crud",
          name: "crud",
          component: () => import("./components/back/Crud.vue"),
        },
        {
          path: "gallery",
          name: "Gallery",
          component: () => import("./components/back/Gallery.vue"),
        },
        {
          path: "events",
          name: "events",
          component: () => import("./components/back/Events.vue"),
        },
        {
          path: "activity",
          name: "activity",
          component: () => import("./components/back/Activity.vue"),
        },
      ],
    },
    // {
    //   path: "products",
    //   name: "products",
    //   component: () => import("./components/back/Products.vue")
    // },
    {
      path: "profile",
      name: "profile",
      component: () => import("./components/back/Profile.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/Signin.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/Signup.vue"),
    },
    {
      path: "/hba",
      name: "hba",
      component: () => import("./views/program/hba.vue"),
    },
    {
      path: "/dip",
      name: "dip",
      component: () => import("./views/program/dip.vue"),
    },
    {
      path: "/Drop-In-Center",
      name: "Drop-In-Center",
      component: () => import("./views/program/Drop-In-Center.vue"),
    },
    {
      path: "/Empower_children",
      name: "Empower_children",
      component: () => import("./views/program/Empower_children.vue"),
    },
    {
      path: "/Equipping_Church",
      name: "Equipping_Church",
      component: () => import("./views/program/Equipping_Church.vue"),
    },
    {
      path: "/Equipping_Families",
      name: "Equipping_Families",
      component: () => import("./views/program/Equipping_Families.vue"),
    },
    {
      path: "/Health_Care",
      name: "Health_Care",
      component: () => import("./views/program/Health_Care.vue"),
    },
    {
      path: "/Emergency_help",
      name: "Emergency_help",
      component: () => import("./views/program/Emergency_help.vue"),
    },
    {
      path: "/Victory_Party",
      name: "Victory_Party",
      component: () => import("./views/program/Victory_Party.vue"),
    },
    {
      path: "/Stories",
      name: "Stories",
      component: () => import("./views/Stories.vue"),
    },
    {
      path: "/mim",
      name: "mim",
      component: () => import("./views/story/Mim.vue"),
    },
    {
      path: "/sumaiya",
      name: "sumaiya",
      component: () => import("./views/story/Sumaiya.vue"),
    },
    {
      path: "/jim",
      name: "jim",
      component: () => import("./views/story/Jim.vue"),
    },
    {
      path: "/story/:storyId",
      name: "story",
      props: true,
      component: () => import("./views/story/Story.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
