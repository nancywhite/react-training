import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollQuestion from '../src/components/PollQuestion.js';

describe('PollQuestion', function() {
    it('renders without problems', function() {
        const component = TestUtils.renderIntoDocument(<PollQuestion/>);
        expect(component).toEqual(jasmine.anything());
    });
});