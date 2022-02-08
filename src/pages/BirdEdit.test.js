import { render, screen } from "@testing-library/react";
import BirdEdit from "./BirdEdit";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("When the BirdEdit loads...", () => {
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<BirdEdit />);
    const renderedBirdEdit = renderedApp.find("h1");
    expect(renderedBirdEdit.length).toEqual(1);
  });
  it("displays BirdEdit in the h1 wrapper", () => {
    const renderedApp = shallow(<BirdEdit />);
    const renderedBirdEdit = renderedApp.find("h1").text();
    expect(renderedBirdEdit).toEqual("BirdEdit");
  });
});
