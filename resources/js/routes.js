import AllProduct from "./components/Products/index.vue";
import CreateProduct from "./components/Products/create.vue";
import EditProduct from "./components/Products/edit.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: AllProduct,
    },
    {
        name: "create",
        path: "/create",
        component: CreateProduct,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditProduct,
    },
];
