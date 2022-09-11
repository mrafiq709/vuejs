/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

import App from "./App.vue";
import Example from "./components/ExampleComponent.vue";

const routes = [
    {
        name: "Example",
        path: "/",
        component: Example,
    },
];

const router = new VueRouter({ mode: "history", routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
