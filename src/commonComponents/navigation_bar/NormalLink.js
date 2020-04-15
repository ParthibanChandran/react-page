import React from 'react'
import { DropdownButton } from './style';

export default function NormalLink(props) {
    let { linkName} = props.value;
    return (
        <div>
            <DropdownButton>{linkName}</DropdownButton>
        </div>
    )
}
