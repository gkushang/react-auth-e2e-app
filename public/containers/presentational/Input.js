import React from 'react';
import TextField from 'material-ui/TextField';

export default (field) => {

    return (
            <TextField
                floatingLabelText={field.placeholder}
                errorText = {field.meta.touched && field.meta.error}
                style={{width: "70%", float: "left", textAlign: "center"}}
                className="common small-font"
                errorStyle={{"font-size": "10px", float: "left"}}
                hintStyle={{"font-size": "10px"}}
                floatingLabelStyle={{"font-size": "15px"}}
                hintText={field.hintText}
                {...field.input}
            />
        );
};