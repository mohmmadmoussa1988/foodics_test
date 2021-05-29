import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import axios from "axios";
import { reviewsRequest } from "./requests";
import { results } from "./mocked_data";
jest.mock("axios");

describe("Requests Functions", () => {
  it("reviewsRequest fetches results", async () => {
    const data = results;
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(reviewsRequest()).resolves.toEqual({
      values: [
        {
          id: 1,
          value: 1,
        },
        {
          id: 2,
          value: 2,
        },
      ],
    });
  });
});
