import React from 'react';
import { Avatar } from 'react-native-elements';

export const AvatarImg = (props) => {
    return (
        <Avatar
            size={props.size || "large"}
            rounded = {props.rounded}
            source={props.source}
            showEditButton = {props.showEdit}
            containerStyle= {props.containerStyle}
        />
    )
}
