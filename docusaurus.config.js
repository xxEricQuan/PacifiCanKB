// @ts-check
const config = {
  title: 'My Docs',
  tagline: 'Documentation site',
  url: 'https://xxEricQuan.github.io',
  baseUrl: '/PacifiCanKB/',
  onBrokenLinks: 'throw',
  organizationName: 'xxEricQuan',
  projectName: 'PacifiCanKB',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  future: {
    v4: {
      mdx1CompatDisabledByDefault: true,
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
};

module.exports = config;
