const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log (message) {
          console.log(message)
          return null
        }
      })
    },
  },

  env: {
    base_url: 'Http://ration.stackchase.com'
  }
});
