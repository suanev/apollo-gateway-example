import api from '../../server';

const resolvers = {
  Query: {
    restaurant: async (parent: any, args: any) => {
      const { id } = args;
      const res = await api.get(`/restaurants/${id}`);
      return res.data;
    },

    restaurants: async () => {
      const res = await api.get(`/restaurants/`);
      return res.data;
    },
  },
};

export default resolvers;
