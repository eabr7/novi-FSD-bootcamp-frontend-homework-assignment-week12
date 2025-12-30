import './fruitCounter.css';
import { plusOne, minusOne } from '../../helpers/counters.js';

function FruitCounter( {emoji, name, amount, setAmount }) {

    return (

    <article className="fruitCounter">
        <p>{emoji}</p>
        <p>{name}</p>
        <button onClick={() => setAmount(minusOne(amount))} disabled={amount === 0}>-</button>
        <p>{amount}</p>
        <button onClick={() => setAmount(plusOne(amount))}>+</button>
    </article>

    );

}

export default FruitCounter;