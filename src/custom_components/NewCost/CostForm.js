import React, { useState } from 'react'
import './CostForm.css'

const CostForm = () => {
    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name:event.target.value
        //     }
        //  })
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(costData);
        setInputName("");
        setInputDate("");
        setInputAmount("");
    };
    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input  value={inputAmount}type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input value={inputDate} type="date" min='2019-01-01' step='2024-12-31' onChange={dateChangeHandler} />
            </div>
            <div>
                <button type="submit" >Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm