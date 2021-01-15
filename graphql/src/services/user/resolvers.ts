import api from '../../server';
import { v4 as uuidv4 } from 'uuid';

const resolvers = {
  Query: {
    user: async (parent: any, args: any) => {
      const { id } = args;
      const res = await api.get(`/users/${id}`);
      return res.data;
    },
    login: async (parent: any, args: any) => {
      const { email, password } = args;
      const res = await api
        .get(`/users`)
        .then(response =>
          response.data.find(
            (user: any) => user.email === email && user.password === password,
          ),
        );
      return res;
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      const { name, email, password } = args;
      const res = await api.post(`/users`, {
        id: uuidv4(),
        name,
        email,
        password,
        likedPosts: [],
      });

      return res.data;
    },
    updateUser: async (parent: any, args: any) => {
      const { id, name, email, password } = args;
      const res = await api.put(`/users/${id}`, {
        name,
        email,
        password,
      });
      return res.data;
    },
    deleteUser: async (parent: any, args: any) => {
      const { id } = args;
      await api.delete(`/users/${id}`)
      return {
        status: `User deleted`,
      };
    },
    addLikedPosts: async (parent: any, args: any) => {
      const { postID, userID } = args;
      let user = await api.get(`/users/${userID}`);

      if (!user.data.likedPosts.includes(postID)) {
        user.data.likedPosts.push(postID);
      }

      const response = await api.patch(`/users/${userID}`, {
        likedPosts: user.data.likedPosts,
      });

      return response.data;
    },
  },
};

export default resolvers;
