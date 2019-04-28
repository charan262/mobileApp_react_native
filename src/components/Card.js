import React from 'react';
import { Card } from 'react-native-elements';

export const Card = (props) => {
    return(
        <Card>
            {props.children}
        </Card>
    )
}