import React from 'react'

import {configure,shallow} from 'enzyme';
import Aapter from 'enzyme-adapter-react-16';

import Table from './table';
import TableContent from '../TableContentComponent/tableContent';

configure({adapter:new Aapter()});

describe('<TableContent/>',()=>{
    it('should render one <TableContent/> element',()=>{
        const wrapper = shallow(<Table/>);
        expect(wrapper.find(TableContent)).toHaveLength(1);
    })
})