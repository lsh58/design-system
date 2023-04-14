const pages: Component.Page[] = [
  {
    id: "overview",
    title: "Overview",
    link: "/overview",
    pages: [
      {
        id: "overview",
        title: "Getting Start",
        link: "/overview",
        path: ["Overview", "Getting Start"],
      },
      {
        id: "designtoken",
        title: "Design Token",
        link: "/overview/designtoken",
        path: ["Overview", "Design Token"],
      },
      {
        id: "changelog",
        title: "Change Log",
        link: "/overview/changelog",
        path: ["Overview", "Change Log"],
      },
    ],
  },
  {
    id: "foundations",
    title: "Foundations",
    link: "/foundations/color",
    pages: [
      {
        id: "color",
        title: "Color",
        link: "/foundations/color",
        pages: [
          {
            id: "color",
            title: "Color Palette",
            link: "/foundations/color",
            path: ["Foundations", "Color", "Color Palette"],
          },
          {
            id: "semantic",
            title: "Semantic Color",
            link: "/foundations/color/semantic",
            path: ["Foundations", "Color", "Semantic Color"],
          },
          {
            id: "dark",
            title: "Dark Mode",
            link: "/foundations/color/dark",
            path: ["Foundations", "Color", "Dark Mode"],
          },
        ],
      },
      {
        id: "typography",
        title: "Typography",
        link: "/foundations/typography",
        path: ["Foundations", "Typography"],
      },
      {
        id: "icongraphy",
        title: "Icongraphy",
        link: "/foundations/icongraphy",
        path: ["Foundations", "Icongraphy"],
      },
      {
        id: "layout",
        title: "Layout",
        link: "/foundations/layout",
        path: ["Foundations", "Layout"],
      },
      {
        id: "objectstyles",
        title: "Object Styles",
        link: "/foundations/objectstyles",
        path: ["Foundations", "Object Styles"],
      },
    ],
  },
  { id: "components", title: "Components", link: "/components" },
  { id: "templates", title: "Templates", link: "/templates" },
];

export default pages;
