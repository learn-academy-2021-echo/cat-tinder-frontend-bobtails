import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe("When the Home loads...", () => {
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<Home />)
    const renderedHome = renderedApp.find("h1")
    expect(renderedHome.length).toEqual(1)
  })
  it("displays Home in the h1 wrapper", () => {
    const renderedApp = shallow(<Home />)
    const renderedHome = renderedApp.find("h1").text()
    expect(renderedHome).toEqual('Home')
  })
})
