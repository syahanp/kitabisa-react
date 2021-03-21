import { Filter } from '../components/Filter/type';

export const useSortedCampaigns = (campaigns_data: object[], filter : Filter, ) => {
    let sorted_campaigns: object[] = []

    switch (filter) {
        case 'days':
            sorted_campaigns = campaigns_data.sort((a:any, b:any) => a.days_remaining - b.days_remaining)
            break

        case 'donation':
            sorted_campaigns = campaigns_data.sort((a:any, b:any) => a.donation_target - b.donation_target)
            break
    
        default:
            break;
    }

    return [
        sorted_campaigns
    ]
}