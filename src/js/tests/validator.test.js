import {isValidInn} from "../validators";

test("", () => {
  const result = isValidInn('5555555555554444');

  expect(result).toBe(true);
});


test("", () => {
  const result = isValidInn('4539283476916568');

  expect(result).toBe(true);
});

test("", () => {
  const result = isValidInn('6762403225743237');

  expect(result).toBe(true);
});
test("", () => {
  const result = isValidInn('12357847523695414');

  expect(result).toBe(false);
});
test("", () => {
  const result = isValidInn('411111111');

  expect(result).toBe(false);
});