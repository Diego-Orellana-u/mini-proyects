import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { NavBar } from "@/components/nav/nav-bar";

describe("Rendering of nav bar", () => {
  it("Should render", () => {
    render(<NavBar />);
  });

  it("Should render the nav container with correct test-id and tag", () => {
    render(<NavBar />);

    const navTag = screen.getByTestId("parent-nav");

    expect(navTag).toBeInTheDocument();
    expect(navTag.tagName.toLowerCase()).toBe("nav");
  });

  it("Should render sign in button", () => {
    render(<NavBar />);
    const signInBtn = screen.getByText("Sign In");

    expect(signInBtn).toBeInTheDocument();
  });

  it("Link in the button should have href to signin", () => {
    render(<NavBar />);
    const signInLink = screen.getByRole("link", { name: /sign in/i });

    expect(signInLink).toHaveAttribute("href", "/signin");
  });

  it("Should render sign up button", () => {
    render(<NavBar />);
    const signUpBtn = screen.getByText("Sign Up");

    expect(signUpBtn);
  });

  it("Link in the button should have href to signup", () => {
    render(<NavBar />);

    const signUpLink = screen.getByRole("link", { name: /sign up/i });

    expect(signUpLink).toHaveAttribute("href", "/signup");
  });

  it("Auth links should be inside the same nav tag", () => {
    render(<NavBar />);

    const nav = screen.getByTestId("parent-nav");

    const signInLink = within(nav).getByRole("link", { name: /sign in/i });
    const signUpLink = within(nav).getByRole("link", { name: /sign up/i });

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });
});
