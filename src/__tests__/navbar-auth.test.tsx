import {
  render,
  screen,
} from "@testing-library/react";

import Navbar from "@/components/layout/Navbar";
import { describe, expect, it, vi } from "vitest";


describe("Navbar authentication states", () => {


  it("shows login when logged out", async () => {

    vi.mock(
      "@/lib/auth-client",
      () => ({
        authClient: {
          useSession: () => ({
            data: null,
            isPending: false,
          }),
        },
      })
    );


    render(<Navbar />);


    expect(
      screen.getByText(
        /continue with google/i
      )
    ).toBeInTheDocument();

  });


});