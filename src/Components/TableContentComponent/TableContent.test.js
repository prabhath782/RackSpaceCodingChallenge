import React from 'react';
import { configure, shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TableContent } from './tableContent';
import Loading from './loading'
import { Table, TableRow, TableBody,TableHeaderCell } from 'semantic-ui-react'
configure({adapter: new Adapter()});

describe('<TableContnent />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<TableContent />);
    });
         
    it('should render Loading Component ', () => {
        expect(wrapper.contains(<Loading/>));
    });

    it('should render Table elements',()=>{
        expect(wrapper.find(Table).length).toBe(1);
    });

    it('should render TableRows',()=>{
        expect(wrapper.find(TableBody).length).toBe(1);
    });

    it('simulate click on tableheader',()=>{
        const sortFunc = wrapper.instance().onSort()
        wrapper.find(TableHeaderCell).simulate('click',1)
        expect(sortFunc.calls).to.Equal(1) 
    })

    it('render tablerows',()=>{
        wrapper = mount(<TableContent />)
        expect(wrapper.find(TableBody).children().length).toEqual(100);
    })
});