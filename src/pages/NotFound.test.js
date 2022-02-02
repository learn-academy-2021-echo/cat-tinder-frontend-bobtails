import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe("When NotFound loads...", () => {
    let renderedNotFound
    beforeEach(() =>{
      renderedNotFound = shallow(<NotFound />)
    })
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<NotFound />)
    const renderedNotFound = renderedApp.find("h1")
    expect(renderedNotFound.length).toEqual(1)
  })
})
