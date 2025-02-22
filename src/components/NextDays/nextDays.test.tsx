import clearDay from "@assets/clear_day.svg";

import { DayProps } from "@components/Day";
import { NextDays } from "@components/NextDays";
import { render, screen } from "@testing-library/react-native";

describe("Component: NextDays", () => {
  it("should render next days", () => {
    const data: DayProps[] = [
      {
        day: "18/07",
        min: "30°C",
        max: "34°C",
        icon: clearDay,
        weather: "Céu limpo",
      },
      {
        day: "19/07",
        min: "12°C",
        max: "24°C",
        icon: clearDay,
        weather: "Nublado",
      },
      {
        day: "20/07",
        min: "16°C",
        max: "22°C",
        icon: clearDay,
        weather: "Nublado",
      },
      {
        day: "21/07",
        min: "31°C",
        max: "34°C",
        icon: clearDay,
        weather: "Céu limpo",
      },
      {
        day: "22/07",
        min: "32°C",
        max: "34°C",
        icon: clearDay,
        weather: "Chuva fraca",
      },
    ];

    render(<NextDays data={data} />);

    expect(screen.queryByText("17/07")).toBeFalsy();
    expect(screen.getByText("18/07")).toBeTruthy();
    expect(screen.getByText("19/07")).toBeTruthy();
    expect(screen.getByText("20/07")).toBeTruthy();
    expect(screen.getByText("21/07")).toBeTruthy();
    expect(screen.getByText("22/07")).toBeTruthy();
    expect(screen.queryByText("23/07")).toBeFalsy();
  });
});
