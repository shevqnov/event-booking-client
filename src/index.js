import React from "react";
import { render } from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Event Booking App</h1>
      <p>Advantages: </p>
      <ul>
        <li> 1. This is awesome app for booking your events</li>
        <li> 2. Build with graphql and react, and using parsel for build btw...</li>
        <li> 3. And even more ...</li>
      </ul>
      <section>
        <Query
          query={gql`
            {
              events {
                _id
                title
                date
                description
                price
                date
                creator {
                  email
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p> Loading ... </p>;
            if (error) return <p>Something went wrong !</p>;

            return (
              <React.Fragment>
                <p>Event list : </p>
                <ul>
                  {data.events.map(({ title, _id, date, description, price }) => (
                    <li key={_id}>
                      {title}
                      <br />
                      <i>{description}</i>
                      <br />

                      <strong>Price: {price}</strong>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            );
          }}
        </Query>
      </section>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
