const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pokeapi.co/api/v2/",
  },
  env: {
    POKEAPI_HOST: "https://pokeapi.co/api/v2/",
  },
});
