import './counterButton.css';


function CounterButton ({name, onClick, disable}) {


    return (

        <button onClick={onClick} disabled={disable}>
            {name}
        </button>

    );

}


export default CounterButton;