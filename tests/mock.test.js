jest.mock('./api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ name: 'Jonas' }))
}));

const { fetchData } = require('./api');

test('turėtų grąžinti vartotoją', async () => {
  fetchData.mockResolvedValue({ name: 'Jonas' });
  const user = await fetchData();
  expect(user.name).toBe('Jonas');
});
