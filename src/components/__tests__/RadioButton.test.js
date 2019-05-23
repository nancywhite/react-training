import React from 'react';
import { shallow } from 'enzyme';

describe('Radio Button', ()=> {

    const RadioButton = require('../RadioButton').default;

    it('renders with appropriately', function() {
        const mockChangeHandler = jest.fn();

        const wrapper = shallow(
            <RadioButton
                key = "key"
                label = "label"
                name = "name"
                value = "myValue"
                checked = {false}
                changeHandler = {mockChangeHandler} />);

        const v = wrapper.find('input').prop('value');
        // const va = wrapper.find('input[value]').value();

        expect(v).toEqual('myValue');
        // expect(va).toEqual('myValue');

    });


});
