import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Table } from './table';
import {TableContent} from '../TableContentComponent/tableContent';

configure({adapter: new Adapter()});

describe('Test Table Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Table postRequest ={()=>{}}/>);
    });

    it('should render <Teast /> when receiving ingredients', () => {
        expect(wrapper.find(TableContent));
    });

    it('Testing props',()=>{
        expect(wrapper.prop().loading).to.be.defined
    })
});