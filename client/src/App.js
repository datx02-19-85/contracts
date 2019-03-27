import React from "react";
import { DrizzleContext } from "drizzle-react";
import VotingApp from "./VotingApp"

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        // TODO: Show a nice screen. Maybe even catch why this is showing. 
        return "Loading...";
      }

      return (
        <VotingApp
          drizzle={drizzle}
          drizzleState={drizzleState} />
      );
    }}
  </DrizzleContext.Consumer>
)