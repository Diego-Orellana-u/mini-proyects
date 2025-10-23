import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./nav-bar";

describe("Rendering of nav bar", () => {
  it("Should render", () => {
    render(<NavBar />);
  });

  it("Should render the nav parent tag", () => {
    render(<NavBar />);

    const navTag = screen.getByTestId("parent-nav");
    expect(navTag.tagName).toBe("NAV");
  });

  it("Should render sign in button", () => {
    render(<NavBar />);
    const signInBtn = screen.getByText("Sign In");

    expect(signInBtn);
  });

  it("Should render sign up button", () => {
    render(<NavBar />);
    const signUpBtn = screen.getByText("Sign Up");

    expect(signUpBtn);
  });

  it("Link component in the button should have href to signin", () => {
    render(<NavBar />);
    const signInLink = screen.getByRole("link", { name: /sign in/i });

    expect(signInLink).toHaveAttribute("href", "/signin");
  });

  it("Link component in the button should have href to signup", () => {
    render(<NavBar />);

    const signUpLink = screen.getByRole("link", { name: /sign up/i });

    expect(signUpLink).toHaveAttribute("href", "/signup");
  });
});
