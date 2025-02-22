import clearDay from '@assets/clear_day.svg';

import { Day, DayProps } from "@components/Day";
import { render, screen } from "@testing-library/react-native";

describe("Component: Day", () => {
  it("should render day", () => {
    const data: DayProps = {
      day: '18/07',
      min: '30°C',
      max: '34°C',
      icon: clearDay,
      weather: 'Céu limpo',
    }

    render(
      <Day
        data={data}
      />
    );

    expect(screen.getByText('18/07')).toBeTruthy()
  });
});
