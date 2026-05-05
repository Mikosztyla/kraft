import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Kraft hero tagline", () => {
  render(<App />);
  const tagline = screen.getByText(/Cocktail Bar/i);
  expect(tagline).toBeInTheDocument();
});
