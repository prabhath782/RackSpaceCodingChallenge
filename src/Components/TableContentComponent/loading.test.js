import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './loading'
import { Table,TableCell,Dimmer,Loader } from 'semantic-ui-react'
configure({adapter: new Adapter()});

describe('<TableContnent />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Loading />);
    });
         
    it('should render Table elements',()=>{
        expect(wrapper.find('.img'));
    });

    it('should have tablecell',()=>{
        expect(wrapper.find(TableCell).length).toBe(1);
    })
    it('Should have a dimmer ',()=>{
        expect(wrapper.find(Dimmer).length).toBe(1);
    })
    it('should have a Loader',()=>{
        expect(wrapper.find(Loader).length).toBe(1);
    })
});