const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bookstorewebapp.azurewebsites.net/",
  },
});

require('@applitools/eyes-cypress')(module);
