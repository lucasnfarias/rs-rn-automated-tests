import { weatherAPIResponseMock } from "@__tests__/mocks/weatherAPIResponse.mock";
import { api } from "@services/api";
import { getWeatherByCityService } from "@services/getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should be return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: weatherAPIResponseMock })

    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 })
    
    expect(response).toHaveProperty('today')
    expect(response).toHaveProperty('nextDays')
  })
});
