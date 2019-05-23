import React from 'react';
import { shallow } from 'enzyme';

describe('Poll Submit Button', function() {

    const PollSubmitButton = require('../PollSubmitButton').default;

    it('renders without a problem', function () {
        const wrapper = shallow(<PollSubmitButton/>);
        const buttonText = wrapper.find('button').text();
        expect(buttonText).toEqual('Choose');
    });

    it('calls handler function on click', ()=> {

        const onButtonClick = jest.fn();
        const wrapper = shallow(<PollSubmitButton handleClick={onButtonClick}/>);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
        expect(onButtonClick.mock.calls.length).toBe(1);
    });
});