import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Invest-AI header", () => {
  render(<App />);
  const heading = screen.getByText(/invest-ai/i);
  expect(heading).toBeInTheDocument();
});
