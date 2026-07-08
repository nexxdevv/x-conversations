import { render, screen } from "@testing-library/react";

import Navbar from "@/components/layout/Navbar";
import { describe, expect, it } from "vitest";

describe("Navbar", () => {
  it("shows login button", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("button", {
        name: /login/i,
      }),
    ).toBeInTheDocument();
  });
});
