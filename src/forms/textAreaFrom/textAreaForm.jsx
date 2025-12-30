import './textAreaForm.css';


function TextAreaForm({id, className, label, rows, cols, placeholder, register, name, errors, validation}) {

    return (

        <>
            <label htmlFor={id} className={className}>
                {label}
                <textarea
                    id={id}
                    rows={rows}
                    cols={cols}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            </label>
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </>
    );

}

export default TextAreaForm;