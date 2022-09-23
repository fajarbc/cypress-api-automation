import { validateSchema } from "../support/helpers";
import schema from "../../schema/pokeapi-schema.json";

describe("PokeAPI", () => {
  it("Validate schema", () => {
    cy.getData('pokemon').then((response) => {
      const valid = validateSchema(schema, response.body);
      expect(valid).eq(true, "Schema is valid");
    });
  })
  it("Default data count is 20", () => {
    cy.getData('pokemon').then((response) => {
      expect(response.body.results.length).eq(20, "Data count is 20")
    });
  })
  it("Custom data count is 10 (limit)", () => {
    cy.getData('pokemon?limit=10').then((response) => {
      expect(response.body.results.length).eq(10, "Data count is 10")
    });
  })
  it("Default page 2", () => {
    cy.getData('pokemon?offset=20').then((response) => {
      expect(response.body.next).eq(Cypress.env("POKEAPI_HOST")+'pokemon?offset=40&limit=20', "Default page 2")
    });
  })
});
