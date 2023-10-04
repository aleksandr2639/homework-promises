import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(10000);

const expected = JSON.stringify({
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
});

test('should sum', async () => {
  const one = await GameSavingLoader.load();
  expect(one).toEqual(expected);
});
