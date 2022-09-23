import Ajv from "ajv";
export default {
  getData: (url, method = "GET") => {
    cy.request({
      url: url,
      method: method,
    });
  },
  validateSchema: (schema, data) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(data);
  },
};
