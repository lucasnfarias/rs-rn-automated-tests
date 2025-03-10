import { cityAPIResponseMock } from "@__tests__/mocks/api/cityAPIResponse.mock";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: cityAPIResponseMock });

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    await waitFor(() => expect(screen.findByText(/são paulo/i, {}, { timeout: 3000 })).toBeTruthy());
  });
});
