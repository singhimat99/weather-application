import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter test", () => {
  it("counter displays initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toBe(0);
  });
  it("counter is changed appropriately", () => {
    const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const restartBtn = getByRole("button", { name: "Restart" });
    const switchSignsBtn = getByRole("button", { name: "Switch Sign" });

    let count = 0;
    let countValue;

    function clickEvent(condition) {
      if (condition === "add") {
        fireEvent.click(incrementBtn);
        count++;
      } else if (condition === "subtract") {
        fireEvent.click(decrementBtn);
        count--;
      } else if (condition === "restart") {
        fireEvent.click(restartBtn);
        count = 0;
      } else if (condition === "switch sign") {
        fireEvent.click(switchSignsBtn);
        count = count * -1;
      }
      return Number(getByTestId("count").textContent);
    }

    expect(clickEvent("add")).toBe(count);

    expect(clickEvent("switch sign")).toBe(count);
    expect(clickEvent("subtract")).toBe(count);
    expect(clickEvent("restart")).toBe(count);
  });
});
