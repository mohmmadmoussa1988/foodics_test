import React from 'react';
import { TitleWrapper } from './Title.styles';

const Title = ({ children }) => {
    return (
        <TitleWrapper>
            {children}
        </TitleWrapper>
    )
}

export default Title;