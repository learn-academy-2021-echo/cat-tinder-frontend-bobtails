import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe("When the footer loads...", () => {
  it("displays an h1 on the footer", () => {
    const renderedApp = shallow(<Footer />)
    const renderedFooter = renderedApp.find("h1")
    expect(renderedFooter.length).toEqual(1)
  })
})
