import { createRouter, createWebHistory } from "vue-router";
import FormPage from "../components/FormPage.vue";
import AnotherFormPage from "../components/AnotherFormPage.vue";
import LandingPage from "../components/LandingPage.vue";
import TemplatesPage from "@/components/TemplatesPage.vue";
import BuilderOne from "@/components/BuilderOne.vue";

const routes = [
  {
    path: "/personal-info",
    name: "personalinfo",
    component: FormPage,
  },
  {
    path: "/work-experience",
    name: "workexperience",
    component: AnotherFormPage,
  },
  {
    path: "/",
    name: "landingpage",
    component: LandingPage,
  },
  {
    path: "/templates",
    name: "template",
    component: TemplatesPage,
  },
  {
    path: "/builder/1",
    name: "builder1",
    component: BuilderOne,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
