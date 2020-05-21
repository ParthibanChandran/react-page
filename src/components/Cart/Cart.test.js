import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from "./Cart";
import {EmptyCart} from "./style";

configure({adapter: new Adapter()});

describe('<Cart />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cart />);
    });

    it('should render <EmptyCart/> if addToCart is zero', () => {
        expect(wrapper.contains(<EmptyCart>Empty</EmptyCart>)).toEqual(false);
    });

    it('<EmptyCart/> is not rendered if addToCart is zero', () => {
        expect(wrapper.find(EmptyCart)).toHaveLength(0);
    });
});