
import './App.css'
import React from "react"
import FruitCounter from "./components/counters/fruitCounter/fruitCounter.jsx";
import SubmitButton from "./components/buttons/submitButton/submitButton.jsx";
import {useForm} from 'react-hook-form';
import InputForm from "./forms/inputForm/inputForm.jsx";
import SelectForm from "./forms/selectForm/selectForm.jsx";
import RadioForm from "./forms/radioForm/radioForm.jsx";
import TextAreaForm from "./forms/textAreaFrom/textAreaForm.jsx";
import CheckboxForm from "./forms/checkboxForm/checkboxForm.jsx";
import {plusOne, minusOne} from "./helpers/counters.js";


function App() {
    const [fruit, setFruit] = React.useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    function resetAll() {
        setFruit({strawberry: 0, apple: 0, kiwi: 0, banana: 0});
    }

    function handleFormSubmit(data) {
        console.log(
            {
                form: data,
                fruit: fruit,
            }
        );
    }

    function handleFruitChange(type, action) {
        let newValue;

        if (action === 'add') {
            newValue = plusOne(fruit[type]);
        }
        else if (action === 'remove') {
            newValue = minusOne(fruit[type]);
        }

        setFruit({
            ...fruit,
            [type]: newValue,
        });
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
                type="strawberry"
                amount={fruit.strawberry}
                onChange={handleFruitChange}
            />
            <FruitCounter
                emoji="🍌"
                name="Bananen"
                type="banana"
                amount={fruit.banana}
                onChange={handleFruitChange}
            />
            <FruitCounter
                emoji="🍎"
                name="Appels"
                type="apple"
                amount={fruit.apple}
                onChange={handleFruitChange}
            />
            <FruitCounter
                emoji="🥝"
                name="Kiwi's"
                type="kiwi"
                amount={fruit.kiwi}
                onChange={handleFruitChange}
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
                    errors={errors}
                    validation={{
                        required: {
                            value: true,
                            message: 'Voornaam is verplicht',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Voornaam mag maximaal 50 tekens bevatten',
                        },
                    }}
                />
                <InputForm
                    id="last-name-field"
                    className="last-name-field"
                    label="Achternaam:"
                    type="text"
                    name="lastName"
                    register={register}
                    errors={errors}
                    validation={{
                        required: {
                            value: true,
                            message: 'Achternaam is verplicht',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Achternaam mag maximaal 50 tekens bevatten',
                        },
                    }}

                />
                <InputForm
                    id="age-field"
                    className="age-field"
                    label="Leeftijd:"
                    type="number"
                    name="age"
                    register={register}
                    errors={errors}
                    validation={{
                        required: {
                            value: true,
                            message: 'Leeftijd is verplicht',
                        },
                        valueAsNumber: true,
                        min: {
                            value: 18,
                            message: 'Je moet minimaal 18 jaar zijn',
                        },
                    }}
                />
                <InputForm
                    id="postal-code-field"
                    className="postal-code-field"
                    label="Postcode:"
                    type="text"
                    name="postalCode"
                    register={register}
                    errors={errors}
                    validation={{
                        required: {
                            value: true,
                            message: 'Postcode is verplicht',
                        },
                        pattern: {
                            value: /^\d{4}\s?[A-Za-z]{2}$/,
                            message: 'Postcode moet het formaat 1234AB hebben',
                        },
                    }}
                />

                <SelectForm
                    label="Bezorgfrequentie: "
                    name="deliveryFrequency"
                    register={register}
                    options={[
                        { value: 'weekly', label: 'Iedere week' },
                        { value: 'biweekly', label: 'Om de week' },
                        { value: 'monthly', label: 'Iedere maand' }
                    ]}
                />

                <div className="radio-buttons">
                    <RadioForm
                        id="day"
                        label="Overdag"
                        name="deliveryMoment"
                        value="day"
                        register={register}
                    />

                    <RadioForm
                        id="night"
                        label="’s Avonds"
                        name="deliveryMoment"
                        value="night"
                        register={register}
                    />
                </div>

                <TextAreaForm
                    className="comment-field"
                    label="Opmerkingen:"
                    id="comment"
                    rows={5}
                    cols={30}
                    placeholder="Opmerkingen..."
                    name="comment"
                    register={register}
                    errors={errors}
                    validation={{
                        maxLength: {
                            value: 250,
                            message: 'Opmerking mag maximaal 250 tekens bevatten',
                        },
                    }}
                />

                <CheckboxForm
                    id="termsAndConditionsAgreement"
                    name="termsAndConditionsAgreement"
                    className="terms-and-conditions-agreement-field"
                    label="Ik ga akkoord met de voorwaarden"
                    register={register}
                    errors={errors}
                    validation={{
                        required: {
                            value: true,
                            message: 'Akkoord gaan met de voorwaarden is verplicht',
                        }
                    }}

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
