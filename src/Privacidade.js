import React from 'react';
import ContentContainer from './ContentContainer';

const Privacidade = () => {
    return (
        <ContentContainer>
            <div className='privacidade-title'>
                <h1>Política de Privacidade</h1>
                <div className='privacidade-text'>
                    <span>
                        Esta declaração de garantia de privacidade de dados aplica-se especifica e exclusivamente ao serviço
                        de <strong>Transcarp</strong>.
                        <br />
                        <br />
                        Quando pedimos o seu nome, morada, telefone, entre outros, temos como objectivo manter um relacionamento
                        mais próximo com os nossos utilizadores. Com o seu registo, passamos a tratá-lo pelo seu nome próprio,
                        ficamos mais próximos de si e podemos responder às suas necessidades ou pedidos com mais eficácia.
                        <br />
                        <br />
                        <strong>Transcarp</strong> garante que estas informações NÃO SERÃO utilizadas
                        em nenhuma lista com fins promocionais via correio electrónico ou telefónico, nem serão
                        divulgados a qualquer outra organização ou empresa. <strong>Transcarp</strong> compromete-se
                        a proteger a sua privacidade e irá fazer um grande esforço para garantir o uso de uma tecnologia
                        suficientemente eficaz para que a sua experiência on-line seja de dia para dia mais segura e os seus
                        relacionamentos na Web cada vez mais reforçados.<br />
                        <br />
                        Sobre qualquer questão que tenha relativa a este compromisso, não hesite em contactar-nos.
                    </span>
                </div>
            </div>
        </ContentContainer>
    );
};

export default Privacidade;