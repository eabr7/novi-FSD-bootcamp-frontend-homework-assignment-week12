import './checkboxForm.css';

function checkboxForm() {

    return (

        <label>
            <input
                type="checkbox"
                name="conditions"
                checked={formState.conditions}
                onChange={handleChange}
            />
            Akkoord met de algemene voorwaarden
        </label>

    );


}

export default checkboxForm;