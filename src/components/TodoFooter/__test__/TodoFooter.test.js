import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
it("should render the currect amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// it("should render", async () => {
//   //in the todofooter.js file, give a p tag opacity of 0 so that it is not visible
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).not.toBeVisible();
// });

it("should render toContainHTML", async () => {
  //in the todofooter.js file, give a p tag opacity of 0 so that it is not visible
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

it("should render p tag assertion byRole and use toHaveTextContent", async () => {
  //in the todofooter.js file, give a p tag opacity of 0 so that it is not visible
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("paragraph");
  expect(paragraphElement).toHaveTextContent("1 task left");
});
