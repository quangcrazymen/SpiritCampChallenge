import {
  transformArrayToObject,
  findTwoElementsWithDefinedSum,
  foreverAloneNumber
} from "./algorithms-for-all";
import {
  findTopNFrequentNumber,
  fibonacciGenerator
} from "./algorithms-for-backend-only";

// ------------- FRONTEND AND BACKEND PROBLEMS ----------

test("Find Two Elements With Pre-defined Sum", () => {
  const findTwoElementWrapper = (...args) => {
    return findTwoElementsWithDefinedSum(...args)?.reduce((a, b) => a + b);
  };

  expect(findTwoElementWrapper([1, 2, 3, 4, 5, 6], 10)).toBe(10);
  expect(findTwoElementsWithDefinedSum([1, 2, 3, 4, 5, 6], 13)).toBeUndefined();
  expect(findTwoElementWrapper([-3, -5, 4, -2, 1, 6], -1)).toBe(-1);
  expect(findTwoElementWrapper([0, -5, 4, -2, 1, 6], -5)).toBe(-5);
  expect(findTwoElementWrapper([0, 0, 0, 0, 5], 0)).toBe(0);
});

test("Transform Array To Object", () => {
  expect(transformArrayToObject(["a", 1, "b", 2])).toEqual({ a: 1, b: 2 });
  expect(transformArrayToObject([1, "a", 2, "b"])).toEqual({ 1: "a", 2: "b" });
  expect(transformArrayToObject([1, 1, 2, 2])).toEqual({ 1: 1, 2: 2 });
  expect(transformArrayToObject([undefined, 1, 2, 2])).toEqual({
    undefined: 1,
    2: 2
  });
});

test("Find single number in the world of couple numbers", () => {
  expect(foreverAloneNumber([1, 2, 3, 3, 2])).toBe(1);
  expect(foreverAloneNumber([0, 0, -1, -1, 2])).toBe(2);
  expect(foreverAloneNumber([10, 0, 0, 5, 10])).toBe(5);
});

// ------------- BACKEND PROBLEMS ----------
// If your are applying for backend,
// please uncomment all the test cases below
// ----------------------------------------

// test("Find N most frequent number", () => {
//   expect(findTopNFrequentNumber([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
//   expect(findTopNFrequentNumber([0, 0, 1, 2], 1)).toEqual([0]);
//   expect(findTopNFrequentNumber([1, 2, 3], 1)).toEqual([1]);
//   expect(findTopNFrequentNumber([0, 0, 0, 0, 1, 1, 2, 2, 3], 3)).toEqual([
//     0,
//     1,
//     2
//   ]);
// });

// test("Find first N elements in Fibonacci Sequence", () => {
//   expect(fibonacciGenerator(2)).toEqual([1, 1]);
//   expect(fibonacciGenerator(4)).toEqual([1, 1, 2, 3]);
//   expect(fibonacciGenerator(5)).toEqual([1, 1, 2, 3, 5]);
//   expect(fibonacciGenerator(6)).toEqual([1, 1, 2, 3, 5, 8]);
//   expect(fibonacciGenerator(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
// });
