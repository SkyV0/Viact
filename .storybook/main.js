const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)
module.exports = {
	stories: ['../src/stories/*.stories.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	staticDirs: ['../src/assets'],
	features: {
		storyStoreV7: true,
	},
};
