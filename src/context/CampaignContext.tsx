import React, { useContext, createContext, useState } from 'react';
import { Filter } from '../components/Filter/type';
import json from '../kitabisa.json'

const CampaignContext = createContext(null)

export const useCampaignContext = () => {
    return useContext(CampaignContext)
}

export const CampaignContextProvider:React.FC = ({ children }) => {
    const [filter, setFilter] = useState<Filter>("donation")
    const campaigns = json.data
    
    const contextValue = { campaigns, setFilter, filter }

    return (
        <CampaignContext.Provider value={contextValue}>
            { children }
        </CampaignContext.Provider>
    )
}
