import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
describe("calculation Service", () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService],
    });
    calculatorService = TestBed.inject(CalculatorService);
  });

  it("Should Add Two Numbers", () => {
    console.log("it : ADD");
    const result = calculatorService.add(5, 2);
    expect(result).toBe(7);
  }),
    it("Should Subtract Two Numbers", () => {
      const result = calculatorService.subtract(5, 2);
      expect(result).toBe(3);
    });
});
