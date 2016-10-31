import React from 'react';
import TextField from 'material-ui/TextField';

export default (field) => {

    return (
            <TextField
                floatingLabelText={field.placeholder}
                errorText = {field.meta.touched && field.meta.error}
                className="security-field common small-font"
                errorStyle={{"font-size": "10px"}}
                hintStyle={{"font-size": "16px"}}
                hintText={field.hintText}
                {...field.input}
            />
        );
};