import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollContainer from '../src/containers/PollContainer.js';

describe('PollContainer', function() {
    it('renders without problems', function() {
        const component = TestUtils.renderIntoDocument(<PollContainer/>);
        expect(component).toEqual(jasmine.anything());
    });
});