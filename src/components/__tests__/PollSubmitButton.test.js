import React from 'react';
import { shallow } from 'enzyme';

describe('Poll Submit Button', function() {

    const PollSubmitButton = require('../PollSubmitButton').default;

    it('renders without a problem', function () {
        const wrapper = shallow(<PollSubmitButton/>);
        const buttonText = wrapper.find('button').text();
        expect(buttonText).toEqual('Submit');
    });

    it('calls handler function on click', ()=> {
        const mockHandler = jest.fn();
        const wrapper = shallow(<PollSubmitButton handleClick={mockHandler}/>);
        wrapper.find('button').simulate('click');
        expect(mockHandler).toHaveBeenCalled();
        expect(mockHandler.mock.calls.length).toBe(1);
    });
});