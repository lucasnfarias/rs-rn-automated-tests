import { getStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Storage: CityStorage", () => {
  it("should return null when no city is stored", async () => {
    const response = await getStorageCity()
    
    expect(response).toBeNull()
  })
});
