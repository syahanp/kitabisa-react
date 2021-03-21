import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import Filter from '../Filter';

describe('Navbar should rendered properly', () => {
    const wrapper = shallow(<Navbar />)

    it('should render logo image', () => {
        expect(wrapper.find('img').exists()).toBe(true)
    })

    it('should render Filter component', () => {
        expect(wrapper.containsMatchingElement(<Filter />)).toBe(true)
    })
})