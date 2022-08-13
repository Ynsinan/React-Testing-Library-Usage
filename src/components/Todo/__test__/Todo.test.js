import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};
describe("Todo", () => {
  it("should render display of the added todo item", async () => {
    render(<MockTodo />);
    addTask(["test"]);
    const divElement = screen.getByText(/test/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items add few more task", async () => {
    render(<MockTodo />);
    addTask(["test", "test2", "test3"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("task should not have completed class when initally rendered", async () => {
    render(<MockTodo />);
    addTask(["test"]);
    const divElement = screen.getByText(/test/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", async () => {
    render(<MockTodo />);
    addTask(["test"]);
    const divElement = screen.getByText(/test/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
