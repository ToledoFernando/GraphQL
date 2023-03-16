console.clear();

import starApolloServer from "./app.js";
import { resolvers } from "./graphql/resolvers.js";
import { type } from "./graphql/typedef.js";
import connectionDB from "./db.js";

connectionDB();

starApolloServer(type, resolvers);
