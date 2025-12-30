import './radioForm.css';

function RadioForm({id, className, label, value, register, name}) {

    return (

        <label htmlFor={id} className={className}>
            <input
                type="radio"
                id={id}
                value={value}
                {...register(name)}
            />
            {label}
        </label>
    );

}

export default RadioForm;

