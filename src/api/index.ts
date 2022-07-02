export const getWines = async (page: string, limit: string) => {
  const BASE_URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`

  try {
    const wines = await fetch(BASE_URL)

    return wines;
  } catch (error) {
    console.log('API error');

    return [];
  }
}
