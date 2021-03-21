import React from 'react'
import styled from 'styled-components';
import { IProps } from './types';

const ProgressBar:React.FC<IProps> = ({ percentage }) => {
    return (
        <Div percentage={percentage}>
            <div className='progress-active'/>
        </Div>
    )
}

export default ProgressBar;

const Div = styled.div<IProps>`
    position: relative;
    margin: .5rem 0rem;
    width: 100%;
    height: 12px;
    border-radius: 20px;
    background-color: #F3F4F6;
    
    .progress-active {
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentage}) => `${percentage}%`};
        height: 12px;
        border-radius: 20px;
        background-color: ${({percentage}) => percentage === 100 ? `#EC4899` : `#9CA3AF`};
    }
`
