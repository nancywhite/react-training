import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollSubmitButton from '../src/components/PollSubmitButton.js';
import TestWrapper from './TestWrapper.js';

describe('PollSubmitButton', ()=> {
    it('renders without problems', ()=> {
        const component = TestUtils.renderIntoDocument(<TestWrapper><PollSubmitButton/></TestWrapper>);
        expect(component).toEqual(jasmine.anything());
    });
});