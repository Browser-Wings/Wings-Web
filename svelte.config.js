import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `
      @use "src/styles/_mixin.scss" as *;
      @use "src/styles/function/_flex.scss" as *;
      @use "src/styles/" as *;
      `,
    },
  }),
};
