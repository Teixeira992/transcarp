import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceitar"
            cookieName="myCookieConsent"
            style={{ background: '#333' }}
            buttonStyle={{ backgroundColor: '#F9A800', color: '#3F681A', fontSize: '18px' }}
            expires={150}
        >
            Este site usa cookies para garantir que você obtenha a melhor experiência.
        </CookieConsent>
    );
};

export default CookieBanner;
