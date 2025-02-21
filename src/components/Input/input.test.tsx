import { Input } from "@components/Input";
import { render, screen } from "@testing-library/react-native";
describe("Component: Input", () => {

  it("should render without activity indicator", () => {
    render(<Input />, {});
  
    const activityIndicator = screen.queryByTestId('activity-indicator')

    expect(activityIndicator).toBeNull()
  });

  it("should render with activity indicator", () => {
    render(<Input isLoading />, {});
  
    const activityIndicator = screen.getByTestId('activity-indicator')

    expect(activityIndicator).toBeTruthy()
  });
});
