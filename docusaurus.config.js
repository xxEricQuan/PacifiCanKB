// @ts-check
const config = {
  title: 'My Docs',
  tagline: 'Documentation site',
  url: 'https://YOUR_GITHUB_USERNAME.github.io',
  baseUrl: '/YOUR_REPO_NAME/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'xxEricQuan',
  projectName: 'PacifiCanKB',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  future: {
    v4: {
      mdx1CompatDisabledByDefault: true,
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
};

module.exports = config;
