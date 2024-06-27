import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "16fo2z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1680,
  viewportHeight: 852
});
