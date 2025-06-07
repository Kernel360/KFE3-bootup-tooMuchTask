/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],

  // Vite 설정 추가
  async viteFinal(config) {
    // 이미지 파일 처리 설정
    config.assetsInclude = ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"];

    // Rollup 외부 모듈 설정
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = config.build.rollupOptions.external || [];

    // 문제가 되는 이미지 경로를 외부 모듈로 처리하지 않도록 설정
    if (Array.isArray(config.build.rollupOptions.external)) {
      config.build.rollupOptions.external = config.build.rollupOptions.external.filter(
        external => !external.includes?.("github.svg")
      );
    }

    return config;
  },

  // Webpack 설정 (Next.js 프레임워크 사용 시)
  async webpackFinal(config) {
    // SVG 파일 처리 규칙 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

export default config;
