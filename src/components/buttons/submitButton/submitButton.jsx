import './submitButton.css';

function SubmitButton({type, name, click}) {

    return (
        <button
            type={type}
            onClick={click}
            className="submitButton">
            {name}
        </button>
    );

}

export default SubmitButton;