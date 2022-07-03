export const getWines = async (page: number) => {
  const BASE_URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`

  try {
    const res = await fetch(BASE_URL)
    const wines = res.json()

    return wines;
  } catch (error) {
    console.log('API error');

    return [];
  }
}
