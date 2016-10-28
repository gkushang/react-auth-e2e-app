import React from 'react';
import TextField from 'material-ui/TextField';

export default (field) => {

    return (
            <TextField
                floatingLabelText={field.placeholder}
                errorText = {field.meta.touched && field.meta.error}
                className="security-field"
                errorStyle={{"font-size": "10px"}}
                hintText={field.hintText}
                style={{
                    "paddingBottom": "5px",
                    "float" :"top",
                    "fontSize": "10px"
                }}
                {...field.input}
                value={field.defaultValue}
            />
        );
};

//{...field.prefillValue ? {value: field.prefillValue} : {}}