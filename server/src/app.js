import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";

const starApolloServer = async (tdef, rvs) => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: tdef,
    resolvers: rvs,
  });

  await server.start();

  app.use("/graph", cors(), express.json(), expressMiddleware(server));

  await new Promise((resolver) =>
    httpServer.listen({ port: 4000 }, () => console.log("Server on port 4000"))
  );
};

export default starApolloServer;
