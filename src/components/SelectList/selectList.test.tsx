import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("Component: SelectList", () => {
  it("should return selected city details", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Curitiba", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText(/curitiba/i);

    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("should not show options when data props is empty", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    );

    const options = screen.getByTestId('options');

    expect(options.children).toHaveLength(0);
  });
});
