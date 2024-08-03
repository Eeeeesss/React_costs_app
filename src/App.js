// import React from "react";
import Costs from "./custom_components/Costs/Costs";
import NewCost from "./custom_components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2024, 7, 20),
      description: "Toyota Camry",
      amount: "19000000"
    },
    {
      date: new Date(2024, 7, 20),
      description: "Apartment",
      amount: "42000000"
    },
    {
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

  return (
    <div>
      <NewCost/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;