import { cityAPIResponseMock } from "@__tests__/mocks/api/cityAPIResponse.mock";
import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    const data = cityAPIResponseMock;

    jest.spyOn(api, "get").mockResolvedValue({ data });

    const response = await getCityByNameService('São Paulo');

    expect(response).toStrictEqual([{
      id: data.id,
      name: `${data.name}, ${data.sys.country}`,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    }])
  });
});
