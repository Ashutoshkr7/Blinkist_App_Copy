import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from ".";
import { BrowserRouter as Router } from "react-router-dom";
const HomeComponent = {
  title: "Page/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

let trendingBlinks = [
  {
    id: 0,
    name: "Being Boss",
    url: "./assets/Image/Book_Image/beingBoss.png",
    timeRead: "13-minute read",
    writerName: "Kathleen Shannon and Emily...",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 1,
    name: "Beyond Entrepreneurship",
    url: "./assets/Image/Book_Image/beyondEntrepreneurship.png",
    timeRead: "13-minute read",
    writerName: "Jim Collins & Bill Lazier",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 2,
    name: "Employee to Entrepreneur",
    url: "./assets/Image/Book_Image/employeeToEntrepreneur.png",
    timeRead: "14-minute read",
    writerName: "Steve Glaveski",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    progress: "0",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 3,
    name: "The Fate of Food",
    url: "./assets/Image/Book_Image/theFateOfFood.png",
    timeRead: "12-minute read",
    writerName: "Amanda Little",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "31",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 4,
    name: "Lives of the Stoics",
    url: "./assets/Image/Book_Image/livesOfTheStoics.png",
    timeRead: "13-minute read",
    writerName: "Ryan Holiday, Stephen Hansel",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 5,
    name: "Loving Your Business",
    url: "./assets/Image/Book_Image/lovingYourBusiness.png",
    timeRead: "13-minute read",
    writerName: "Debbie King",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "31",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setTrendingBlinks = () => {};
let justAdded = [
  {
    id: 0,
    name: "The Lonely Century",
    url: "./assets/Image/Book_Image/theLonelyCentury.png",
    timeRead: "15-minute read",
    writerName: "Noreena Hertz",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },

  {
    id: 1,
    name: "Eat Better, Feel Better",
    url: "./assets/Image/Book_Image/eatBetter,FeelBetter.png",
    timeRead: "13-minute read",
    writerName: "Giada De Laurentiis",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 2,
    name: "Dropshipping",
    url: "./assets/Image/Book_Image/dropshipping.png",
    timeRead: "12-minute read",
    writerName: "James Moore",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setJustAdded = () => {};
let featuredAudioBlinks = [
  {
    id: 0,
    name: "Bring Your Human to Work",
    url: "./assets/Image/Book_Image/bringYourHumanToWork.png",
    timeRead: "13-minute read",
    writerName: "Erica Keswin",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 1,
    name: "Beyond Entrepreneurship 2.0",
    url: "./assets/Image/Book_Image/beyondEntrepreneurship.png",
    timeRead: "15-minute read",
    writerName: "Jim Collins & Bill Lazier",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },

  {
    id: 2,
    name: "Doesn’t Hurt to Ask",
    url: "./assets/Image/Book_Image/doesn’tHurtToAsk.png",
    timeRead: "13-minute read",
    writerName: "Trey Gowdy",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "0",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setFeaturedAudioBlinks = () => {};
export const Template: ComponentStory<typeof Home> = (args: any) => {
  return (
    <Router>
      <Home {...args} />
    </Router>
  );
};
Template.args = {
  trendingBlinks: trendingBlinks,
  setTrendingBlinks: setTrendingBlinks,
  justAdded: justAdded,
  setJustAdded: setJustAdded,
  featuredAudioBlinks: featuredAudioBlinks,
  setFeaturedAudioBlinks: setFeaturedAudioBlinks,
};

export default HomeComponent;
