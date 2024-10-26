import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
// import React, { useState } from "react"

const CostItem = (props) => {
    // const [description, setDescription] = useState(props.description)

    // const changeDescriptionHandler = () => {
    //     setDescription("New Cost")
    //     // useState(props.description)
    //     console.log(description)
    // }

    return (
        <Card className="cost-item">
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>KZT{props.amount}</div>
            </div>
        </Card>
    )
}
export default CostItem;