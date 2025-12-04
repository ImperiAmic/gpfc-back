import { Request, Response } from "express";
import ServerError from "../../ServerError/ServerError.js";
import statusCodes from "../../globals/statusCodes.js";
import handleErrors from "../handleErrors.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the handleErrors middleware", () => {
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();

  describe("When it receives a response and an error with status code 404 and 'Endpoint not found' message", () => {
    const error = new ServerError(statusCodes.NOT_FOUND, "Endpoint not found");

    test("Then it should call the response's status method with status code 404", () => {
      const expectedStatusCode = 404;

      handleErrors(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with 'Endpoint not found' message", () => {
      const expectedErrorMessage = { error: "Endpoint not found" };

      handleErrors(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });

  describe("When it receives a response and an error with status code 404 but without a message", () => {
    const error = new ServerError(statusCodes.NOT_FOUND);

    test("Then it should call the response's json method with 'Server error' message", () => {
      const expectedErrorMessage = { error: "Server error" };

      handleErrors(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });

  describe("When it receives a response and an error without status code and 'Cannot read properties of undefined' message", () => {
    const error = new Error("Cannot read properties of undefined");

    test("Then it should call the response's status method with status code 500", () => {
      const expectedStatusCode = 500;

      handleErrors(error as ServerError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with 'Server error' message", () => {
      const expectedErrorMessage = { error: "Server error" };

      handleErrors(error as ServerError, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
