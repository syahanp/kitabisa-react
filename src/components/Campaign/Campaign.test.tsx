import React from 'react';
import { shallow } from 'enzyme';
import Campaign from './index';
import json from '../../kitabisa.json';
import { formatRupiah } from '../../helper';

const setup = {
    image : json.data[0].image,
    title: "campaign title",
    days_remaining : 20,
    donation_received : 100000,
    donation_percentage : 20,
}

describe('Campaign should be rendered properly', () => {
    const wrapper = shallow(
        <Campaign 
            image={setup.image}
            title={setup.title}
            days_remaining={setup.days_remaining}
            donation_received={setup.donation_received}
            donation_percentage={setup.donation_percentage}
        />
    )
    
    it('should render an image', () => {
        expect(wrapper.find('img').exists()).toBe(true)
    })

    it('should render a title', () => {
        expect(wrapper.find('.metadata-title').text()).toEqual(setup.title)
    })

    it('should render a donation recieved value', () => {
        expect(wrapper.find('.terkumpul .value').text())
            .toEqual(formatRupiah(setup.donation_received).toString())
    })

    it('should render a days remaining value', () => {
        expect(wrapper.find('.sisa .value').text())
            .toEqual(setup.days_remaining.toString())
    })
})