import React from 'react';
import styled from 'styled-components';
import { useCampaignContext } from '../../context/CampaignContext';
import { useSortedCampaigns } from '../../hooks';
import Campaign from '../Campaign';

const CampaignLists:React.FC = () => {
    const { campaigns, filter } = useCampaignContext()

    const [ sorted_campaigns ] = useSortedCampaigns(campaigns, filter)

    return (
        <Div>
            {
                sorted_campaigns.map((x:any) => {
                    return (
                        <Campaign
                            key={x.id}
                            title={x.title}
                            days_remaining={x.days_remaining}
                            donation_received={x.donation_received}
                            donation_percentage={x.donation_percentage}
                            image={x.image}
                        />
                    )
                })
            }
        </Div>
    )
}

export default CampaignLists

const Div = styled.div`
    padding: 1.5rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
    grid-gap: 3rem 2rem;
`