import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './index';

const percentage = 20

describe('ProgressBar should rendered properly', () => {
    const wrapper = shallow(<ProgressBar percentage={percentage} />)

    it('should rendered properly', () => {
        expect(wrapper.find('.progress-active').exists()).toBe(true)
    })
})