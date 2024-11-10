import "./Costs.css"
import Card from "../UI/Card"
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostLits";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2024');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };
console.log(props.costs)
    const filteredCosts = props.costs.filter(costs => {
        return costs.date.getFullYear().toString() === selectedYear;
    })
    console.log(filteredCosts)

    return (
        <div>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    )
}
export default Costs;