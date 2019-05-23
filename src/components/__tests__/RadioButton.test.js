import React from 'react';
import { shallow } from 'enzyme';

describe('Radio Button', ()=> {

    const RadioButton = require('../RadioButton').default;

    it('renders with expected props', function() {
        const mockChangeHandler = jest.fn();

        const wrapper = shallow(
            <RadioButton
                key = "myKey"
                label = "myLabel"
                name = {0}
                value = "myValue"
                checked = {false}
                changeHandler = {mockChangeHandler} />);

        const inputRadioButton = wrapper.find('input');
        console.log(wrapper.debug());

        expect(inputRadioButton.prop('type')).toEqual('radio');
        expect(inputRadioButton.prop('name')).toEqual(0);
        expect(inputRadioButton.prop('value')).toEqual('myValue');
    });
});
