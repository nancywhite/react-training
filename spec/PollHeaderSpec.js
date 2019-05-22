import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollHeader from '../src/components/PollHeader.js';
import TestWrapper from './TestWrapper.js';

describe('PollHeader', ()=> {
    let component;
    beforeEach(()=> {
        component = TestUtils.renderIntoDocument(<TestWrapper><PollHeader text="Welcome to the Poll!"/></TestWrapper>);
    });

    it('renders without problems', ()=> {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', ()=> {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1').textContent;
        const expected = 'Welcome to the Poll!';
        expect(actual).toEqual(expected);
    });
});