import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe("When the header loads...", () => {
  it("displays an h1 on the header", () => {
    const renderedApp = shallow(<Header />)
    const renderedHeader = renderedApp.find("h1")
    expect(renderedHeader.length).toEqual(1)
  })
})
