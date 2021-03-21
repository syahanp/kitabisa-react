import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useCampaignContext } from '../../context/CampaignContext';

const Filter = () => {
    const { setFilter, filter } = useCampaignContext()

    const handleChange = useCallback(e => {
        setFilter(e.target.value)
    }, [filter])

    return (
        <Div>
            <label className='label'>Sort by :</label>
            <select id="sort" onChange={handleChange} value={filter}>
                <option value="donation">Donation goals</option>
                <option value="days">Days left</option>
            </select>
        </Div>
    )
}

export default Filter

const Div = styled.div`
    display: flex;

    .label {
        margin-right: .5rem;
    }

    select, option {
        font-size: 15px;
    }
`