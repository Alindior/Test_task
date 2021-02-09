import axios from 'axios';

export default class UsersApiService {
  static async getAllUsers(page) {
    try {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getOneById(id) {
    try {
      const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
