import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const port =  process.env.PORT || 4000;

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'destinations', url: process.env.DEST_URL },
    { name: 'hotels', url: process.env.HOTEL_URL },
    { name: 'restaurants', url: process.env.REST_URL },
    { name: 'tours', url: process.env.TOUR_URL },
    { name: 'users', url: process.env.USERS_URL },
  ],
  __exposeQueryPlanExperimental: false,
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

