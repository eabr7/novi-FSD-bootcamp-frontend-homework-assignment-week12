import './selectForm.css';

function SelectForm({label, name, register, options }) {

    return (
        <label className="select-form">
            {label}
            <select {...register(name)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );

}

export default SelectForm;


