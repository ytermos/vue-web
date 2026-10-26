import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/Domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Primus from "../paginae/simpson/Primus.vue";
import Responsum from "../paginae/responsum/Responsum.vue";
import Layout from "@/paginae/simpson/Layout.vue";
import Circa from "@/paginae/simpson/Circa.vue";
import Collectione from "@/paginae/simpson/Collectione.vue";
import Character from "@/paginae/simpson/Character.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },
        {   path: "/batman",
            name: "batman",
            component: Batman
        },
        {   
            path: "/simpson",
             children: [
                {
                    path:"",
                    name:"simpson",
                    component: Primus
                },
                 {
                    path:"about",
                    component: Layout,
                    children: [
                        {
                        path: "",
                        name:"simpson-about",
                        component: Circa
                        }
                    ]
                },
                 {
                    path:"gallery",
                    component: Layout,
                    children: [
                        {
                        path: "",
                        name:"simpson-gallery",
                        component: Collectione
                        },
                        {
                        path: ":id",
                        name:"simpson-detail",
                        component: Character
                        }
                    ]
                }
            ],
        }, 
        {   path: "/indecision",
            name: "indecision",
            component: Responsum
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]

})