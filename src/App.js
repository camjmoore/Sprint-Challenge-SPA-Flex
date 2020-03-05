import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import LocationsList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path = "/" >
        <WelcomePage />
      </Route>

      <Route path = "/characters">
        <CharacterList />
      </Route>

      {/* <Route>
        <LocationsList />
      </Route> */}
    </main>
  );
}
