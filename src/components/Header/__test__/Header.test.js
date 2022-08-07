import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same test passed into title props", async () => {
  render(<Header title="My Header" />);
  const header = screen.getByText(/my header/i);
  expect(header).toBeInTheDocument();
});

// it("should render same test passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const header = screen.getByRole("heading");
//   expect(header).toBeInTheDocument();
// });

it("should render heading by role", async () => {
  render(<Header title="My Header" />);
  const header = screen.getByRole("heading", { name: "My Header" });
  expect(header).toBeInTheDocument();
});

it("should render heading title", async () => {
  render(<Header title="My Header" />);
  const header = screen.getByTitle("Header");
  expect(header).toBeInTheDocument();
});

it("should render heading get by test id", async () => {
  render(<Header title="My Header" />);
  const header = screen.getByTestId("header-1");
  expect(header).toBeInTheDocument();
});

//Fınd By
it("should render heading find by text", async () => {
  render(<Header title="My Header" />);
  const header = await screen.findByText(/my header/i);
  expect(header).toBeInTheDocument();
});

// Query By
it("should render heading query by text", async () => {
  render(<Header title="My Header" />);
  const header = screen.queryByText(/dogs/i);
  expect(header).not.toBeInTheDocument();
});

it("should render headers length", async () => {
  render(<Header title="My Header" />);
  const headers = screen.getAllByRole("heading");
  expect(headers.length).toBe(2);
});
