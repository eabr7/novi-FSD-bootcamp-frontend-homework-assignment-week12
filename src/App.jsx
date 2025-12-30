
import './App.css'
import FruitCounter from "./components/counters/fruitCounter/fruitCounter.jsx";
import React from "react";
import { useForm } from 'react-hook-form';


function App() {
    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    const { register } = useForm();


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




    </>
  )
}

export default App
