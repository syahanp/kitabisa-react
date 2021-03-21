import React from 'react'
import styled from 'styled-components';

const Container:React.FC = ({ children }) => {
    return (
        <Div>
            <div className="container">
                { children }
            </div>
        </Div>
    )
}

export default Container;

const Div = styled.div`
    background-color: #F9FAFB;

    .container {
        margin: 0 auto;
        padding: 0rem 2rem;
        max-width: 1200px
    }
`
