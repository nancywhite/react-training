import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import RadioButton from '../src/components/RadioButton.js';

describe('RadioButton', ()=> {
    let component;
    beforeEach(()=> {
        component = TestUtils.renderIntoDocument(<RadioButton label="To love and be loved"/>);
    });

    it('renders without problems', ()=> {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', ()=> {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'span').textContent;
        const expected = 'To love and be loved';
        expect(actual).toEqual(expected);
    });
});