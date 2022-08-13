const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Doe",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/42.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
