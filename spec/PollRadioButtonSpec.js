import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import PollRadioButton from '../src/components/PollRadioButton.js';

describe('PollRadioButton', function() {
    it('renders without problems', function() {
        const component = TestUtils.renderIntoDocument(<PollRadioButton/>);
        expect(component).toEqual(jasmine.anything());
    });
});