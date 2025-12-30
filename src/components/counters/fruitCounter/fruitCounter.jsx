import './fruitCounter.css';
import CounterButton from "../../buttons/counterButton/counterButton.jsx";

function FruitCounter( {emoji, name, type, amount, onChange }) {

    return (

    <article className="fruitCounter">
        <p>{emoji}</p>
        <p>{name}</p>
        <CounterButton onClick={() => onChange(type, "remove")} disable={amount === 0} name="-"/>
        <p>{amount}</p>
        <CounterButton onClick={() => onChange(type, "add")} name="+" />
    </article>

    );

}

export default FruitCounter;