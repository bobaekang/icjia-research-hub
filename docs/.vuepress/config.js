module.exports = {
  base: '/docs/',
  title: 'Research Hub',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://www.icjia.state.il.us/assets/img/icjia-default.jpg'
      }
    ]
  ],
  themeConfig: {
    logo: 'http://www.icjia.state.il.us/assets/img/icjia-default.jpg',
    nav: [
      { text: 'User Guide', link: '/guide/' },
      {
        text: 'Developer Guide',
        items: [
          { text: 'Developer Guide', link: '/dev-guide/introduction.md' },
          { text: 'API Reference', link: '/dev-guide/api.md' },
          {
            text: 'Contributing Guidelines',
            link: '/dev-guide/contributing.md'
          },
          { text: 'Data Schema', link: '/dev-guide/schema.md' },
          { text: 'Technology Stack', link: '/dev-guide/stack.md' }
        ]
      },
      { text: 'Research Hub', link: 'http://localhost:8080' }
    ]
  }
}
