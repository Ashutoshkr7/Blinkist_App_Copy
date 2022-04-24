import { ComponentMeta, ComponentStory } from "@storybook/react";
// import LogoURL from "../../../assets/Image/Logo/Blinkist_Logo.png";
import LogoURL from "../../../assets/Image/homePageImage/homePageImage.png";
import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";

const HeaderComponent = {
  title: "organism/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args: any) => {
  return (
    <Router>
      <Header {...args} />
    </Router>
  );
};

export default HeaderComponent;
