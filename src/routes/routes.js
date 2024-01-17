const routes = [
    {
        name: "home",
        path: "/",
        type: "link",
        children: []
    },
    {
        name: "about",
        path: "/about",
        type: "link",
        children: []
    },
    {
        name: "services",
        path: "/services",
        type: "dropdown-link",
        children: [
            {
                name: "audio",
                path: "/audio",
                type: "link",
            },
            {
                name: "video",
                path: "/video",
                type: "link",
            },
            {
                name: "lighting",
                path: "/lighting",
                type: "link",
            },
            {
                name: "data & networking",
                path: "/data-networking",
                type: "link",
            },
        ]
    },
]

export default routes;