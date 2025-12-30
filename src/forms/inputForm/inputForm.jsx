import './orderForm.css';


function InputForm({id, className,label, type, register, name }) {

    return (

        <label htmlFor={id} className={className}>
            {label}
            <input
                type={type}
                id={id}
                {...register(name)}
            />
        </label>

    );

}

export default InputForm;