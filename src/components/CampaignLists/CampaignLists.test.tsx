import React from 'react';
import { mount } from 'enzyme';
import CampaignLists from './index';
import json from '../../kitabisa.json';
import Campaign from '../Campaign';
import { CampaignContextProvider } from '../../context/CampaignContext';

describe('CampaignLists should render list of Campaign', () => {
    const wrapper = mount(
        <CampaignContextProvider>
            <CampaignLists />
        </CampaignContextProvider>
    )

    const childrens = json.data.map((x:any, i:number) => <Campaign {...json.data[i]} />)

    it('should render list of Campaign', () => {
        expect(wrapper.containsMatchingElement(childrens)).toBe(true)
    })
})