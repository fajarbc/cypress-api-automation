# Cyress API Automation
## Description
API Automation with Cypress.
Include: JSON Schema Validation using [Ajv](https://ajv.js.org).

Example case: [`pokeapi`](https://pokeapi.co/)
## Generate JSON Schema
File location: `schema/pokeapi-schema.json`
To generate schema.json, paste your example json data in [json-to-schema-converter](https://www.liquid-technologies.com/online-json-to-schema-converter).

Before you click generate, make sure the  **Array rules** is **List Validation** in the Options tab. Generate, copy and paste the result in to the `pokeapi-schema.json` file, but remove the line
```
"$schema": "http://json-schema.org/draft-04/schema#",
```
<br>
# Install
```
npm install
```
*Note*: It may take a while if you havo no Cypress installed in your machine<br><br>


# Run
```
npm start
```
