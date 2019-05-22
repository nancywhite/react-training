import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollContainer from '../src/containers/PollContainer.js';
import TestWrapper from './TestWrapper.js';

describe('PollContainer', ()=> {
    let component;
    beforeEach(()=> {
        component = TestUtils.renderIntoDocument(<TestWrapper><PollContainer /></TestWrapper>);
    });

    it('renders without problems', ()=> {
        expect(component).toEqual(jasmine.anything());
    });

    it('renders 1 PollHeader', ()=> {
        expect(TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1').length).toEqual(1);
    });

    it('renders 1 PollQuestion', ()=> {
        expect(TestUtils.scryRenderedDOMComponentsWithTag(component, 'h2').length).toEqual(1);
    });

    // it('renders 3 input components', ()=> {
    //     expect(TestUtils.scryRenderedDOMComponentsWithTag(component, 'input').length).toEqual(3);
    // });

    it('renders 1 PollSubmitButton', ()=> {
        expect(TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').length).toEqual(1);
    });
});