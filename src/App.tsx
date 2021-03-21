import React from 'react'
import { CampaignContextProvider } from './context/CampaignContext'
import LandingPage from './pages/LandingPage'
import './style/main.css';

const App = () => {
    return (
        <CampaignContextProvider>
            <LandingPage />
        </CampaignContextProvider>
    )
}

export default App
