import React from 'react';
import { mount } from 'enzyme';
import Filter from './index';
import { CampaignContextProvider } from '../../context/CampaignContext';

describe('Filter should rendered properly', () => {
    const wrapper = mount(
        <CampaignContextProvider>
            <Filter />
        </CampaignContextProvider>
    )

    it('should render 2 option', () => {
        expect(wrapper.find('option').length).toEqual(2)
    })

    it('should change option', () => {
        expect(wrapper.find('select').simulate('change', { target: { value: 'donation' } }))
    })
})