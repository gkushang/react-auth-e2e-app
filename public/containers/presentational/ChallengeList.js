import React from "react";
import Styles from "Styles";
import {ListItem} from "material-ui/List";

export default (props) => {
    const buildClassName = (index) => {
        if(props.isDefaultActive) {
            if (index === 0) {
                return "list-group-item " + props.className + " active"
            }
        }

        return "list-group-item " + props.className
    };

    return (
        <div>
            {
                props.challenges.map((challenge, index) => {
                    return (
                        <ListItem
                            href="#"
                            key={challenge.type}
                            onClick={() => props.onClick(challenge)}
                            style={Styles.listItem}
                            className={buildClassName(index)}>
                            {challenge.type}
                        </ListItem>
                    );
                })
            }
        </div>
    );
}
