import React from 'react';
import ContentContainer from './ContentContainer';

const PaginaDeErro = () => {
    return (
        <ContentContainer>
            <div style={{ textAlign: 'center', height: '50vh' }}>
                <h1 className='erro-title'>Ops! Página não encontrada.</h1>
                <a href='#home' className='erro-text'><h3>Voltar ao Início</h3></a>
            </div>
        </ContentContainer>
    );
};

export default PaginaDeErro;