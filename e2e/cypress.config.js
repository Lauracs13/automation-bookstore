const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bookstorewebapp.azurewebsites.net/",
  },
  reporter: "junit", // Specify the reporter
  reporterOptions: {
    mochaFile: "results/TEST-[hash].xml", // Specify the mocha file path
  },
});

require("@applitools/eyes-cypress")(module);
