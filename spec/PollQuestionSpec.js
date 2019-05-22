import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollQuestion from '../src/components/PollQuestion.js';
import TestWrapper from './TestWrapper.js';

describe('PollQuestion', ()=> {
    let component;
    beforeEach(()=> {
        component = TestUtils.renderIntoDocument(<TestWrapper><PollQuestion text="What is the meaning of life?"/></TestWrapper>);
    });

    it('renders without problems', ()=> {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', ()=> {
        const actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h2').textContent;
        const expected = 'What is the meaning of life?';
        expect(actual).toEqual(expected);
    });
});