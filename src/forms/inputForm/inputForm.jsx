import './inputForm.css';


function InputForm({id, className,label, type, register, errors, name, validation}) {

    return (

        <label htmlFor={id} className={className}>
            {label}
            <input
                type={type}
                id={id}
                {...register(name, validation)}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </label>
    );

}

export default InputForm;