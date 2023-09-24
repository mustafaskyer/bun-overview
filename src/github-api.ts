import Axios from "axios";

export async function getGithubUser(username: string) {
  const response = await Axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
