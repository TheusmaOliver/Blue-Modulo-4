export const api = {
  baseURL: "http://localhost:3001",
  readAllUrl: () => api.baseURL + "/personagem",
  buildApiRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
