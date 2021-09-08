export const api = {
  baseURL: "http://localhost:3001",
  readAllUrl: () => `${api.baseURL}/personagem`,
  readById: (id) => `${api.baseURL}/personagem/${id}`,
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
