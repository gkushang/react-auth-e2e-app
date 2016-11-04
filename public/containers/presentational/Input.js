import React from "react";
import TextField from "material-ui/TextField";

export default (field) => {

    return (
        <TextField
            floatingLabelText={field.placeholder}
            errorText={field.meta.touched && field.meta.error}
            style={{width: "70%", float: "left", textAlign: "center"}}
            className="common small-font"
            inputStyle={{fontSize: "16px"}}
            errorStyle={{fontSize: "10px", float: "left"}}
            hintStyle={{fontSize: "10px"}}
            floatingLabelStyle={{fontSize: "15px"}}
            hintText={field.hintText}
            {...field.input}
        />
    );
};