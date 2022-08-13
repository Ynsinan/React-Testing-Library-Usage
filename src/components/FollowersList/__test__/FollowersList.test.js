import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("FollowersList", () => {
  beforeEach(() => {
    // console.log("beforeEach");
    jest.mock("axios");
  });
  //   beforeAll(() => {
  //     console.log("beforeAll");
  //   });
  //   afterEach(() => {
  //     console.log("afterEach");
  //   });

  //   afterAll(() => {
  //     console.log("afterAll");
  //   });

  it("should fetch and render input element", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });
});
