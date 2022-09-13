# Description
Validate JSON Schema using [Ajv](https://ajv.js.org/strict-mode.html). To generate schema.json, paste your example json data in [json-to-schema-converter](https://www.liquid-technologies.com/online-json-to-schema-converter). Before you click generate, make sure the  **Array rules** is **List Validation** in the Options tab. Generate, copy and paste the result in to the `schema.json` file, but remove the line 
```
"$schema": "http://json-schema.org/draft-04/schema#",
```

# Install
```
npm install
```
# Run
```
npm start
```
