import './fruitCounter.css';
import { plusOne, minusOne } from '../../../helpers/counters.js';
import CounterButton from "../../buttons/counterButton/counterButton.jsx";

function FruitCounter( {emoji, name, amount, setAmount }) {

    return (

    <article className="fruitCounter">
        <p>{emoji}</p>
        <p>{name}</p>
        <CounterButton onClick={() => setAmount(minusOne(amount))} disable={amount === 0} name="-"/>
        <p>{amount}</p>
        <CounterButton onClick={() => setAmount(plusOne(amount))} name="+" />
    </article>

    );

}

export default FruitCounter;