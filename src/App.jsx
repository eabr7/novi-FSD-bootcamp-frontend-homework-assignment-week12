
import './App.css'
import React from "react"
import FruitCounter from "./components/counters/fruitCounter/fruitCounter.jsx";
import SubmitButton from "./components/buttons/submitButton/submitButton.jsx";
import {useForm} from 'react-hook-form';
import InputForm from "./forms/inputForm/inputForm.jsx";


function App() {
    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    const { register, handleSubmit } = useForm();

    function resetAll() {
        setApple(0);
        setBanana(0);
        setStrawberry(0);
        setKiwi(0);
    }

    function handleFormSubmit(data) {
        console.log(
            {
                form: data,
                fruit: {strawberry, banana, apple, kiwi}
            }
        );
    }

  return (
    <>
        <header>
            <h1>Fruitmand bezorgservice</h1>
        </header>

        <main>
            <FruitCounter
                emoji="🍓"
                name="Aardbeien"
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
                name="Appels"
                amount={apple}
                setAmount={setApple}
            />
            <FruitCounter
                emoji="🥝"
                name="Kiwi's"
                amount={kiwi}
                setAmount={setKiwi}
            />

            <SubmitButton
                type="button"
                click={resetAll}
                name="reset"
            />
        </main>

        <footer>
            <form className="order-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <InputForm
                    id="first-name-field"
                    className="first-name-field"
                    label="Voornaam:"
                    type="text"
                    name="firstName"
                    register={register}
                />
                <InputForm
                    id="last-name-field"
                    className="last-name-field"
                    label="Achternaam:"
                    type="text"
                    name="lastName"
                    register={register}
                />
                <InputForm
                    id="age-field"
                    className="age-field"
                    label="Leeftijd:"
                    type="number"
                    name="age"
                    register={register}
                />
                <InputForm
                    id="postal-code-field"
                    className="postal-code-field"
                    label="Postcode:"
                    type="text"
                    name="postalCode"
                    register={register}
                />




                <SubmitButton
                    type="submit"
                    name="verzenden"
                />




            </form>
        </footer>

    </>
  );
}

export default App
