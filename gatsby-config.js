module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "list-api",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/cku8rn4c4434a01yz6oljd7lb/master",
    }
  }
]
}
