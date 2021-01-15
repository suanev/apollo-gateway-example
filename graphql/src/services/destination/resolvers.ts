import api from "../../server";

const resolvers = {
  Query: {
    destination: async (parent: any, { id }: any) => {
      const res = await api.get(`/destinations/${id}`);
      return res.data;
    },

    destinations: async () => {
      const res = await api.get(`/destinations/`);
      return res.data;
    },
  },
};

export default resolvers;
