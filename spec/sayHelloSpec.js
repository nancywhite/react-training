import React from 'react';
import TestUtils from 'react-dom/test-utils.js';
import SayHello from '../src/scripts/SayHello.js';

describe('Greet', function() {
    it('renders without problems', function() {
        const sayhello = TestUtils.renderIntoDocument(<SayHello/>);
        expect(sayhello).toEqual(jasmine.anything());
    });
});