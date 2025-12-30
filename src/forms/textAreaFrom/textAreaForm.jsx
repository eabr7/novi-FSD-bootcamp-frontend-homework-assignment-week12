import './textAreaForm.css';


function TextAreaForm({id, className, label, rows, cols, placeholder, register, name}) {

    return (

        <label htmlFor={id} className={className}>
            {label}
            <textarea
                id={id}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                {...register(name)}
            />
        </label>

    );

}

export default TextAreaForm;