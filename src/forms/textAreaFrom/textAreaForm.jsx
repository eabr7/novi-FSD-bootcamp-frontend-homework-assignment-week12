import './textAreaForm.css';


function textAreaForm({htmlForName, labelName, idName, rows, columns, placeHolder, registerName}) {

    return (

        <label htmlFor={htmlForName}>
            {labelName}
            <textarea
                id={idName}
                rows={rows}
                cols={columns}
                placeholder={placeHolder}
                {...register({registerName})}
            >
        </textarea>
        </label>

    );

}

export default textAreaForm;