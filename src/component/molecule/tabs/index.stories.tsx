import Tabs from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
const TabsComponent = {
  title: "molecule/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Template: ComponentStory<typeof Tabs> = (args: any) => (
  <Tabs {...args} />
);

const tabData = [
  {
    value: "currently_Reading",
    label: "Currently reading",
  },
  {
    value: "finished",
    label: "Finished",
  },
];

Template.args = {
  // borderBottom: "2px solid #E1ECFC",
  textColor: "primary",
  indicatorColor: "primary",
  // indicatorColor: "green",
  tabData: tabData,
};

export default TabsComponent;
