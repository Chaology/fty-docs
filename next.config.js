const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
})

module.exports = {
  ...withNextra(),
  assetPrefix: "/fty-docs",
  images: { unoptimized :true }
}