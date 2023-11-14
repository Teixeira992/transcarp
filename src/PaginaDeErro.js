import React from 'react';
import ContentContainer from './ContentContainer';

const PaginaDeErro = () => {
    return (
        <ContentContainer>
            <div style={{ textAlign: 'center' }}>
                <h1 >Ops! Página não encontrada.</h1>
                <a href='#home'><h3>Voltar ao Início</h3></a>
            </div>
        </ContentContainer>
    );
};

export default PaginaDeErro;