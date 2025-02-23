import { weatherAPIResponseMock } from "@__tests__/mocks/api/weatherAPIResponse.mock";
import { render } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { api } from "@services/api";
import { CityProps } from "@services/getCityByNameService";
import { act, screen, waitFor } from "@testing-library/react-native";

describe("Routes", () => {
  it("should render Search screen when no city is selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should render Dashboard screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: weatherAPIResponseMock });

    const city: CityProps = {
      id: "1",
      name: "Curitiba",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);

    expect(title).toBeTruthy();
  });
});
