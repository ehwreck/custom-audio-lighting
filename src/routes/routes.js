const routes = [
    {
        name: "home",
        path: "/",
        component: "home",
        type: "link",
    },
    {
        name: "about",
        path: "/about",
        component: "about",
        type: "link",
    },
    {
        name: "audio",
        path: "/services/audio",
        component: "audio",
        type: "link",
    },
    {
        name: "video",
        path: "/services/video",
        component: "video",
        type: "link",
    },
    {
        name: "lighting",
        path: "/services/lighting",
        component: "lighting",
        type: "link",
    },
    {
        name: "networking",
        path: "/services/data-networking",
        component: "data",
        type: "link",
    },
    {
        name: "billboards",
        path: "/billboards",
        component: "billboards",
        type: "link",
    },
]

export default routes;