const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  pageConfig: './pages/_meta.json',
  output: 'export',
})

module.exports = {
  ...withNextra(),
  images: { unoptimized :true }
}