module.exports = {
  pathPrefix: "/elyra-ai-site",
  siteMetadata: {
    title: "Elyra",
    description: "A repository of information for the Elyra AI and Canvas experiences",
    keywords: "elyra,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Elyra",
        icon: "src/images/favicon.svg",
        short_name: "Elyra",
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
