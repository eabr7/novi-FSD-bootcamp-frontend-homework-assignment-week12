import './checkboxForm.css';

function CheckboxForm({id, className, name, label, register, validation, errors}) {

    return (

        <>
            <label htmlFor={id} className={className}>
                <input
                    type="checkbox"
                    id={id}
                    {...register(name, validation)}
                />
                {label}
            </label>
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </>
    );

}

export default CheckboxForm;