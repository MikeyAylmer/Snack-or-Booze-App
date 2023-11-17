import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([
    { id: 1, name: 'Soda', description: 'Fizz and refreshing' },
    { id: 2, name: 'Coffee', description: 'Wake up with a cup' },
  ]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  const addDrink = (newDrink) => setDrinks([...drinks, newDrink]);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks" exact render={() =>
              <Menu items={drinks} itemType="Drink" />} />
            <Route path="/drinks/:id" render={() =>
              <MenuItem items={drinks} itemType="Drink" />} />
            <Route
              path="/add/snack"
              render={() => <AddItemPage addItem={addSnack} itemType="Snack" />}
            />
            <Route
              path="/add/drink"
              render={() => <AddItemPage addItem={addDrink} itemType="Drink" />}
            />
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
