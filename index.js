import fetch from "node-fetch";
import Ajv from "ajv";
import { readFile } from "fs/promises";
async function loadSchema(file) {
  return JSON.parse(await readFile(new URL(file, import.meta.url)));
}
async function loadData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function check() {
  const schema = await loadSchema("./schema.json");
  const data = await loadData("https://pokeapi.co/api/v2"); // get data
  const ajv = new Ajv({ strict: false }); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(schema); // compile schema
  const valid = validate(data); // validate data with schema
  if (!valid) console.log(validate.errors);
  else console.log("valid");
}

check();
