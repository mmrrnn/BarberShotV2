module.exports = {
  siteMetadata: {
    title: `Barber Shot`,
    // TODO: decription
    description: `Barber Shot to męski salon fryzjerski, a także akcesoria do pielęgnacji włosów i zarostu. Znajdziesz nas w Limanowej i w Nowym Sączu. Złóż rezerwację online!`,
    author: `@mmpapiez`,
    keywords: 'barber, barbershot, fryzjer, fryzjer limanowa, fryzjer nowy sacz, mateusz szpilka,',
    siteUrl: `https://www.barbershot.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#BF8C5A`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Dosis\:300,400,700`, `Raleway\:300,400,700`],
        display: "swap",
      },
    },
  ],
}
