import { CityProvider } from "@contexts/CityContext";
import { useCity } from "@hooks/useCity";
import { CityProps } from "@services/getCityByNameService";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("Context: CityContext", () => {
  it("should change selected city", async () => {
    const newCity: CityProps = {
      id: "1",
      name: "Curitiba",
      latitude: 123,
      longitude: 456,
    };

    const { result } = renderHook(() => useCity(), {
      wrapper: CityProvider,
    });

    await waitFor(() => act(() => result.current.handleChanceCity(newCity)));

    expect(result.current.city).toStrictEqual(newCity);
  });
});
