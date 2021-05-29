import React from 'react';
import { TopHeaderWrapper, IDWrapper, NameWrapper } from './TopHeader.styles';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TopHeader = ({ children }) => {
    const location = useLocation()

    console.log('location', location);
    return (
        <>

            <TopHeaderWrapper>
                <Link to="/products" className={location.pathname.includes("/products") ? 'active' : ''}><NameWrapper key={'NameWrapper3'}>Products</NameWrapper></Link>
                <Link to="/" className={location.pathname == "/" ? 'active' : ''}><NameWrapper key={'NameWrapper'} >Customers</NameWrapper></Link>
                <Link to="/categories" className={location.pathname.includes("/categories") ? 'active' : ''}><NameWrapper key={'NameWrapper2'}   >Categories</NameWrapper></Link>
            </TopHeaderWrapper>

        </>
    )
}

export default TopHeader;