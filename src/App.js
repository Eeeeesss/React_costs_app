// import React from "react";
import Costs from "./custom_components/Costs/Costs";
import NewCost from "./custom_components/NewCost/NewCost";
import CostsFilter from "./custom_components/Costs/CostsFilter";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2027, 7, 20),
    description: "Toyota Camry",
    amount: "19000000"
  },
  {
    id: 'c2',
    date: new Date(2026, 7, 20),
    description: "Apartment",
    amount: "42000000"
  },
  {
    id: 'c3',
    date: new Date(2025, 1, 20),
    description: "Business",
    amount: "46000000"
  }
]

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;