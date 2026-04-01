import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "../Button";

test("Button renders with provided label and link", () => {
  render(
    <BrowserRouter>
      <Button path="home">Go Home</Button>
    </BrowserRouter>
  );
  expect(screen.getByRole("link", { name: /go home/i })).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
});
