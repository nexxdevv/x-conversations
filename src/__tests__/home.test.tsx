import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";
import { describe, expect, it } from "vitest";

describe("Home page", () => {
  it("renders welcome text", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/welcome/i)
    ).toBeInTheDocument();
  });
});