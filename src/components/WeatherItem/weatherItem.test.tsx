
import { WeatherItem } from '@components/WeatherItem';
import { render, screen } from "@testing-library/react-native";

import dropIcon from '@assets/drop.svg';
describe("Component: WeatherItem", () => {
  it("should render title and value", () => {
    render(
      <WeatherItem
        title='Umidade do ar'
        value='81%'
        icon={dropIcon}
      />
    );

    expect(screen.getByText('Umidade do ar')).toBeTruthy()
    expect(screen.getByText('81%')).toBeTruthy()
  });
});
