import api from "../../server";

const resolvers = {
  Query: {
    tour: async (parent: any, { id }: any) => {
      const res = await api.get(`/tours/${id}`);
      return res.data;
    },

    tours: async () => {
      const res = await api.get(`/tours`);
      return res.data;
    },
  },
};

export default resolvers;