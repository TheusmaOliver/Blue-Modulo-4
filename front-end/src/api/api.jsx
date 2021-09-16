export const api = {
  baseURL: "http://localhost:3001",
  readAllUrl: () => `${api.baseURL}/personagem`,
  readById: (id) => `${api.baseURL}/personagem/${id}`,
  readAllLocalizationUrl: () => `${api.baseURL}/localizacao`,
  createUrl: () => `${api.baseURL}/personagem`,
  loginUrl: () => `${api.baseURL}/login`,

  authHeader: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers({ ...api.authHeader }) : undefined,
    }),
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    }),
};
