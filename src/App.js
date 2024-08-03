// import React from "react";
import Costs from "./custom_components/Costs/Costs";
import NewCost from "./custom_components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2024, 7, 20),
      description: "Toyota Camry",
      amount: "19000000"
    },
    {
      id: 'c2',
      date: new Date(2024, 7, 20),
      description: "Apartment",
      amount: "42000000"
    },
    {
      id: 'c3',
      date: new Date(2024, 7, 20),
      description: "Business",
      amount: "46000000"
    }
  ]

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h1",
  //     {},
  //     "Расходы"
  //   ),
  //   React.createElement(
  //     Costs,
  //     { costs: costs }
  //   )
  // )

  const addCostHandler = (cost) => {
    console.log(cost)
    console.log("App Comp")
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;