import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollHeader from '../src/components/PollHeader.js';

describe('PollHeader', function() {
    it('renders without problems', function() {
        const component = TestUtils.renderIntoDocument(<PollHeader/>);
        expect(component).toEqual(jasmine.anything());
    });
});