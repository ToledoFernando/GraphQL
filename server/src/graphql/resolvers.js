import data from "../data.json" assert { type: "json" };
import Project from "../models/Project.js";

export const resolvers = {
  Query: {
    hello: () => "Hola mundo",
    personAcount: () => data.length,
    acount: () => data,
    miProjects: async () => await Project.find(),
    oneProject: async (_, { _id }) => {
      const result = await Project.findById(_id);
      return result;
    },
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const pro = new Project({
        name,
        description,
      });
      const saveProyect = await pro.save();
      return saveProyect;
    },
    deleteProject: async (_, { _id }) => {
      const result = await Project.findByIdAndDelete(_id);
      if (!result) throw Error("No se Elimino");
      return result;
    },
  },
};
