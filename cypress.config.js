const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // 1. Activar el reporter
  reporter: 'cypress-mochawesome-reporter', 
  
  e2e: {
    setupNodeEvents(on, config) {
      // 2. Cargar el plugin del reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});