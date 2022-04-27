export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  //add decorators..
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
