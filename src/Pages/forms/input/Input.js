import React from 'react';

import {InputTitle, InputBox} from '../style';

const input = ( props ) => {
    return (
        <React.Fragment>
            <InputTitle>{props.label}</InputTitle>
            <InputBox
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
        </React.Fragment>
    );

};

export default input;