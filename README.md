install Laravel
```
composer create-project laravel/laravel laravel-vue-crud --prefer-dist
```

Install Laravel Vue UI
```
composer require laravel/ui
php artisan ui vue
```
After that
```
npm install vue-router@3
npm install vue-axios
npm install
npm install run development
npm run watch
```
Initiate Vue in Laravel
**resources/views/welcome.blade.php**
```html
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <title>Vue JS CRUD Operations in Laravel</title>
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
```
Add **resource/js/app.vue**
```js
<template>
    <div class="container">
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>
```
Routes **resources/js/routes.js**
```js
import Example from "./components/ExampleComponent.vue";

export const routes = [
    {
        name: "Example",
        path: "/",
        component: Example,
    },
];
```
Edit **resources/js/app.js**
```js
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

import App from "./app.vue";

import { routes } from "./routes";

const router = new VueRouter({ mode: "history", routes: routes });

const app = new Vue({
    el: "#app",
    router: router,
    render: (h) => h(App),
});

```

```
php artisan serve
```