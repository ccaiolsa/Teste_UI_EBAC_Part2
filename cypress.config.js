const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yaf18s',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
  },
});
