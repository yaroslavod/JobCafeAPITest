const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://api.jobka.net:8081/jobs/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
