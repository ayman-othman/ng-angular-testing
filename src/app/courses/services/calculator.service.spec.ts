import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("calculation Service", () => {
  let logger: LoggerService;
  let calc: CalculatorService;

  beforeEach(() => {
     logger = new LoggerService();
     calc = new CalculatorService(logger);
  });

  it("Should Add Two Numbers", () => {
    console.log("it : ADD");

    const result = calc.add(5, 2);

    expect(result).toBe(7);
  }),
    it("Should Subtract Two Numbers", () => {
      const result = calc.subtract(5, 2);

      expect(result).toBe(3);
    });
});
