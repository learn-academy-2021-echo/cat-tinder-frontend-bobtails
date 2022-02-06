import { render, screen } from "@testing-library/react";
import BirdNew from "./BirdNew";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("When the BirdNew loads...", () => {
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<BirdNew />);
    const renderedBirdNew = renderedApp.find("h1");
    expect(renderedBirdNew.length).toEqual(1);
  });
  it("displays BirdNew in the h1 wrapper", () => {
    const renderedApp = shallow(<BirdNew />);
    const renderedBirdNew = renderedApp.find("h1").text();
    expect(renderedBirdNew).toEqual("BirdNew");
  });
});
