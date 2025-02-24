import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "2",
  name: "São Paulo",
  latitude: 123,
  longitude: 456,
};

describe("Storage: CityStorage", () => {
  it("should return null when no city is stored", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return the stored city", async () => {
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toStrictEqual(newCity);
  });

  it("should remove the stored city", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
