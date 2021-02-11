/* 
    Styled components é uma alternativa
    para utilizar css dentro do javascript 
    funciona com o conceito de componentes
    onde cada constante é um componente já estilizado.
*/

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Titulo = styled.h1`
    font-size: 32px;
    color: red;
    font-family: monospace;
`;

const Paragrafo = styled.p`
    font-size: 22px;
    color: darkblue;
    font-family: monospace;
`;

const Randomico = styled.h2`
    font-size: 40px;
    font-family: monospace;
    background: hsl(${Math.random() * 360}, 100%, 50%);
    color: hsl(${Math.random() * 360}, 100%, 50%);
`

export default function StyledComponents () {
    return (
        <Container>
            <Titulo>Estilo utilizando styled components</Titulo>
            <Paragrafo>Biblioteca muito bacana do react</Paragrafo>
            <Randomico>Essa linha muda de cor aleatoriamente</Randomico>
        </Container>
    )
};