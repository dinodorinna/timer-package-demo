import { convertToTimeLeft } from "./timer";

describe("Timer Test", () => {
  test("should be 1 second", () => {
    expect(convertToTimeLeft(1)).toEqual({
      day: 0,
      hour: 0,
      minute: 0,
      second: 1,
    });
  });

  test("should be 1 minute", () => {
    expect(convertToTimeLeft(60)).toEqual({
      day: 0,
      hour: 0,
      minute: 1,
      second: 0,
    });
  });

  test("should be 1 hour", () => {
    expect(convertToTimeLeft(3600)).toEqual({
      day: 0,
      hour: 1,
      minute: 0,
      second: 0,
    });
  });

  test("should be 1 day", () => {
    expect(convertToTimeLeft(86400)).toEqual({
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
    });
  });

  test("should be 1 day and 1 minute", () => {
    expect(convertToTimeLeft(86460)).toEqual({
      day: 1,
      hour: 0,
      minute: 1,
      second: 0,
    });
  });
});
