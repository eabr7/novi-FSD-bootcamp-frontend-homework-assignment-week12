import './submitButton.css';

function SubmitButton({type, name, submit, click}) {

    return (
        <button
            type={type}
            onSubmit={submit}
            onClick={click}
            className="submitButton">
            {name}
        </button>
    );

}

export default SubmitButton;