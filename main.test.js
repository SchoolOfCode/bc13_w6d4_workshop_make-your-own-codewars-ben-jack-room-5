//👉 Write your tests below here:
import { removeUnderage } from "./main.js";
import { test, expect } from "@jest/globals";

describe("Checking no one under the age of 18 is allowed to party", () => {
  // We are returning an array of names
  test("Returned results are an array of names 18 or older", () => {
    const actual = removeUnderage([
      {
        name: "Ben",
        age: 25,
      },
      {
        name: "John",
        age: 33,
      },
      {
        name: "Jack",
        age: 17,
      },
    ]);
    const expected = ["Ben", "John"];
    expect(actual).toEqual(expect.arrayContaining(expected));
  });
  test("Returned results are an array of names 18 or older", () => {
    const actual = removeUnderage([
      {
        name: "Adam",
        age: 7,
      },
      {
        name: "Bob",
        age: 14,
      },
      {
        name: "Eve",
        age: 44,
      },
      {
        name: "Gill",
        age: 43,
      },
      {
        name: "Jack",
        age: 90,
      },
      {
        name: "Ben",
        age: 25,
      },
      {
        name: "Vincent Adult Man",
        age: 27,
      },
    ]);
    const expected = ["Eve", "Gill", "Vincent Adult Man", "Jack", "Ben"];
    expect(actual).toEqual(expect.arrayContaining(expected));
  });
});

describe("Checking the names are arranged by eldest first", () => {
  // Check if the names are sorted by age
  test("Names should be ordered by eldest first", () => {
    const actual = removeUnderage([
      {
        name: "Ben",
        age: 25,
      },
      {
        name: "John",
        age: 33,
      },
      {
        name: "Jack",
        age: 17,
      },
    ]);
    const expected = ["John", "Ben"];
    expect(actual).toEqual(expected);
  });

  test("Names should be ordered by eldest first", () => {
    const actual = removeUnderage([
      {
        name: "Adam",
        age: 7,
      },
      {
        name: "Bob",
        age: 14,
      },
      {
        name: "Eve",
        age: 44,
      },
      {
        name: "Gill",
        age: 43,
      },
      {
        name: "Jack",
        age: 90,
      },
      {
        name: "Ben",
        age: 25,
      },
    ]);
    const expected = ["Jack", "Eve", "Gill", "Ben"];
    expect(actual).toEqual(expected);
  });
});
