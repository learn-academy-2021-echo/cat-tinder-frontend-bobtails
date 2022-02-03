import { render, screen } from "@testing-library/react";
import BirdIndex from "./BirdIndex";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("When the BirdIndex loads...", () => {
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<BirdIndex />);
    const renderedBirdIndex = renderedApp.find("h1");
    expect(renderedBirdIndex.length).toEqual(1);
  });
  it("displays BirdIndex in the h1 wrapper", () => {
    const renderedApp = shallow(<BirdIndex />);
    const renderedBirdIndex = renderedApp.find("h1").text();
    expect(renderedBirdIndex).toEqual("BirdIndex");
  });
});
