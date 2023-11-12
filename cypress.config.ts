import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://todomvc.com/examples/react/#/',
    viewportWidth: 1920,
    viewportHeight: 1020,
    watchForFileChanges: false,
    specPattern: "**/*.spec.ts",

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: false,
      json: true
    }
  }
});
