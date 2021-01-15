import api from '../../server';

const resolvers = {
  Query: {
    hotel: async (parent: any, { id }: any) => {
      const res = await api.get(`/hotels/${id}`);
      return res.data;
    },

    hotels: async () => {
      const res = await api.get(`/hotels/`);
      return res.data;
    },
  },
};

export default resolvers;
