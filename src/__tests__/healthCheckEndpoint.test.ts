import request from "supertest";
import app from "../server/app.js";

describe("Given the GET '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(app).get("/");

      expect(response.status).toBe(expectedStatusCode);
    });

    test("Then it should respond with a '🏓' message", async () => {
      type Body = {
        message: string;
      };

      const expectedMessage = "🏓";

      const response = await request(app).get("/");
      const responseBody: Body = response.body;

      expect(responseBody.message).toBe(expectedMessage);
    });
  });
});
