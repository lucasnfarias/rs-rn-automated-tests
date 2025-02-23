import { cityAPIResponseMock } from "@__tests__/mocks/api/cityAPIResponse.mock";
import { weatherAPIResponseMock } from "@__tests__/mocks/api/weatherAPIResponse.mock";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api";
import { CityProps } from "@services/getCityByNameService";

describe("Screen: Dashboard", () => {

  beforeAll(async () => {
    const city: CityProps = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)
  })

  it("should show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: weatherAPIResponseMock });

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
    expect(cityName).toBeTruthy();
  });

  it("should show another selected city weather", async () => {
    jest.spyOn(api, "get")
      .mockResolvedValueOnce({ data: weatherAPIResponseMock })
      .mockResolvedValueOnce({ data: cityAPIResponseMock })
      .mockResolvedValueOnce({ data: weatherAPIResponseMock });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

    const cityName = 'São Paulo'

    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  });
});
