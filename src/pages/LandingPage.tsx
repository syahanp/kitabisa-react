import React from 'react';

import Navbar from '../components/Navbar';
import CampaignLists from '../components/CampaignLists';
import Container from '../components/Container';

const LandingPage:React.FC = () => {

    return (
        <Container>
            <Navbar />
            
            <CampaignLists />
        </Container>
    )
}

export default LandingPage;