import { getNextDays } from "@utils/getNextDays";

describe('getNextDays', () => {
  it('should return the next five days', () => {
    const days = getNextDays();
  
    expect(days).toHaveLength(5)
  })
})