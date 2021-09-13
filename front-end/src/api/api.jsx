export const api = {
  baseURL: "http://localhost:3001",
  readAllUrl: () => `${api.baseURL}/personagem`,
  readById: (id) => `${api.baseURL}/personagem/${id}`,
  readAllLocalizationUrl: () => `${api.baseURL}/localizacao`,
  createUrl: () => `${api.baseURL}/personagem`,
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    }),
};
