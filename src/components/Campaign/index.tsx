import React from 'react'
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';
import { formatRupiah } from '../../helper';
import { IProps } from './types';

const Campaign:React.FC<IProps> = ({
    image, 
    title,
    donation_received,
    donation_percentage,
    days_remaining
}) => {
    return (
        <Figure>
            <div className="campaign-img">
                <img src={image} alt=""/>
            </div>
            <figcaption className='campaign-metadata'>
                <div className="metadata-title">
                    { title }
                </div>
                <div className="metadata-progress-bar">
                    <ProgressBar percentage={donation_percentage} />
                </div>
                <div className="metadata-details">
                    <div className="terkumpul">
                        <p className='label'>Terkumpul</p>
                        <p className='value'>{ formatRupiah(donation_received) }</p>
                    </div>
                    <div className="sisa">
                        <p className='label'>Sisa Hari</p>
                        <p className='value'>{ days_remaining }</p>
                    </div>
                </div>
            </figcaption>
        </Figure>
    )
}

export default Campaign;

const Figure = styled.figure`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(156, 163, 175, 0.1), 0px 4px 6px rgba(156, 163, 175, 0.05);

    .campaign-img {
        width: 100%;

        img {
            width: 100%;
            height: auto;
            max-height: 230px;
            border-radius: 5px 5px 0px 0px;
        }
    }

    .campaign-metadata {
        padding: 1rem;
        
        .metadata-title {
            margin-bottom: 1rem;
            font-size: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }

        .metadata-details {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .terkumpul, .sisa {
                p.label {
                    font-size: 13px;
                    color: #9CA3AF;
                }
                p.value {
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
`
