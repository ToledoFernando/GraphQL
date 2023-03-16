import React from "react";
import { useQuery } from "@apollo/client";
import { getProjects } from "../graphql/projects";

function Home() {
  const { loading, error, data } = useQuery(getProjects);

  console.log(loading);
  console.log(error);
  console.log(data);
  if (loading) {
    return <h1>Cargando xdxdxdddd</h1>;
  } else if (error) {
    return <h1>Ocurrio un error</h1>;
  } else
    return (
      <div>
        <h1>Home</h1>
        {data.miProjects.map((e) => {
          return (
            <div key={e._id}>
              <h4>{e.name}</h4>
              <h5>{e.description}</h5>
              <p>ID: {e._id}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
}

export default Home;
