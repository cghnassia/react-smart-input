import React from 'react';
import InputSearchComponent from '../../app/src/components/InputSearchComponent.jsx';
import renderer from 'react-test-renderer';
import TestUtils from 'react-addons-test-utils';

describe('Link', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <InputSearchComponent />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

  /*it ('When clicking on search, binded function should be called', () => {
        let returnedValue = null;
        let onSearch = function(value) {
            returnedValue = value;
        }

        const inputSearchComponent = TestUtils.renderIntoDocument(
            <InputSearchComponent onSearch={onSearch} />
        );

        TestUtils.Simulate.change(
          TestUtils.findRenderedDOMComponentWithTag(inputSearchComponent, 'button')
        );

        expect(returnedValue).toEqual('');
    });*/
});