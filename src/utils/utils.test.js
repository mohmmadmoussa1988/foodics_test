import { getResultsCount, insertDecimal, getData } from "./utils";
import { results } from "./mocked_data";

describe("Utils Functions", () => {
  it("getResultsCount returns the count of the array", async () => {
    const data = results.values;
    const res = getResultsCount(data);
    expect(res).toEqual(2);
  });

  it("insertDecimal returns the number as decimal", async () => {
    const data = 55;
    const res = insertDecimal(data);
    expect(res).toEqual("5.5");
  });

  it("getData with clear true returns the same array", async () => {
    const data = results.values;
    const newdata = results.values;
    const clear = true;
    const res = getData(data, newdata, clear);
    expect(res.length).toEqual(2);
    expect(res).toEqual([
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
    ]);
  });

  it("getData with clear false returns concatenation for 2 arrays", async () => {
    const data = results.values;
    const newdata = results.values;
    const clear = false;
    const res = getData(data, newdata, clear);
    expect(res.length).toEqual(4);
    expect(res).toEqual([
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
    ]);
  });
});
