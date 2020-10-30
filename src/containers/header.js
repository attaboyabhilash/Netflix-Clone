import React from 'react';
import { useHistory } from 'react-router-dom'
import { Header } from '../components';
import * as ROUTES from '../constants/Routes';

export function HeaderContainer({ children }) {
    const history = useHistory()
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOMEPAGE} src={process.env.PUBLIC_URL + "/images/misc/logo.svg"} alt="Netflix" />
                {history.location.pathname === '/' ? 
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                    :
                history.location.pathname === '/signin' ? 
                    <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Header.ButtonLink>
                    :
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                }
            </Header.Frame>
            {children}
        </Header>
    )
}