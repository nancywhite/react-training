import React from 'react';
import { shallow } from 'enzyme';

describe('About Us', function() {

    const AboutUs = require('../AboutUs').default;

    it('renders without a problem', function () {
        const wrapper = shallow(<AboutUs/>);
        const text = wrapper.find('h1').text();
        expect(text).toEqual('About Us');
    });
});