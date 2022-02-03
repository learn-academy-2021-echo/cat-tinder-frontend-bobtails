import { render, screen } from "@testing-library/react";
import BirdShow from "./BirdShow";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("When the BirdShow loads...", () => {
  it("displays an h1 wrapper in the body", () => {
    const renderedApp = shallow(<BirdShow />);
    const renderedBirdShow = renderedApp.find("h1");
    expect(renderedBirdShow.length).toEqual(1);
  });
  it("displays BirdShow in the h1 wrapper", () => {
    const renderedApp = shallow(<BirdShow />);
    const renderedBirdShow = renderedApp.find("h1").text();
    expect(renderedBirdShow).toEqual("BirdShow");
  });
});
