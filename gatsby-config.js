module.exports = {
  siteMetadata: {
    title: "Elyra",
    description: "A repository of information for the Elyra AI and Canvas experiences",
    keywords: "elyra,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
        isSwitcherEnabled: "false",
      },
    },
    'gatsby-theme-carbon'
  ],
  
};
