import axios from "axios";

const userProfiles = axios.create({
  baseURL: "https://reqres.in/api",
});

export const getUsersPage = async (pageParam = 1) => {
  try {
    const response = await userProfiles.get(`/users?page=${pageParam}`);
    return response.data;
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error.message}`);
  }
};
