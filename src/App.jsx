
import './App.css'
import React from "react"
import FruitCounter from "./components/counters/fruitCounter/fruitCounter.jsx";
import SubmitButton from "./components/buttons/submitButton/submitButton.jsx";
import { useForm } from 'react-hook-form';


function App() {
    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    const { register } = useForm();

    function resetAll() {
        setApple(0), setBanana(0), setStrawberry(0), setKiwi(0)
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>


        <FruitCounter
            emoji="🍓"
            name="Aarbeiden"
            amount={strawberry}
            setAmount={setStrawberry}
        />
        <FruitCounter
            emoji="🍌"
            name="Bananen"
            amount={banana}
            setAmount={setBanana}
        />
        <FruitCounter
            emoji="🍎"
            name="Aappels"
            amount={apple}
            setAmount={setApple}
        />
        <FruitCounter
            emoji="🥝"
            name="Kiwi's"
            amount={kiwi}
            setAmount={setKiwi}
        />
        <SubmitButton type="button" click={resetAll} name="reset"/>


    </>
  )
}

export default App
