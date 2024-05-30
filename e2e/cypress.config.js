const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/TEST-[hash].xml",
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    apiKey: "VdaMSb19f2RV4v3G0J6kdtxg106f108l110LMDvhALbpAgRVE110",
    appName: "Automation Bookstore",
    batch: {
      id: "1ba5e717-2c97-4d42-9ffd-94d722aa1173",
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 63860,
  isComponent: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://jolly-flower-0f81b180f.5.azurestaticapps.net",
  },
});
