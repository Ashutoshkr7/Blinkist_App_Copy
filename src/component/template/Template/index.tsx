import Header from "../../../component/organism/Header";
import LogoImage from "../../../assets/Image/Logo/Blinkist_Logo.png";
import Explore from "../../../component/organism/Explore";
import Footer from "../../../component/organism/Footer";
import { Box, Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Home from "../../page/Home";
import { useState, useEffect } from "react";

const TemplateComponent = () => {
  const [exploreOption, setExploreOption] = useState<boolean>(false);

  const handleExploreMenu = () => {
    setExploreOption(!exploreOption);
  };

  const [trendingBlinks, setTrendingBlinks] = useState<any>(null);
  const [justAdded, setJustAdded] = useState<any>(null);
  const [featuredAudioBlinks, setFeaturedAudioBlinks] = useState<any>(null);

  const bookData = async () => {
    let response = await fetch("./json/trendingBlinks.json");
    let rData = await response.json();
    console.log("rData", rData);
    setTrendingBlinks(rData);
    console.log("trendingBlinks", trendingBlinks);
    response = await fetch("./json/justAdded.json");
    let rLibrary = await response.json();
    setJustAdded(rLibrary);
    console.log("rLibrary", rLibrary);
    console.log("justAdded", justAdded);
    response = await fetch("./json/featuredAudioBlinks.json");
    let rBooks = await response.json();
    setFeaturedAudioBlinks(rBooks);
    console.log("rBooks", rBooks);
    console.log("featuredAudioBlinks", featuredAudioBlinks);
  };
  useEffect(() => {
    bookData();
  }, []);

  return !trendingBlinks || !justAdded || !featuredAudioBlinks ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress data-testid="circular-progress" />
    </Container>
  ) : (
    <Box sx={{ position: "relative", height: "100vh" }} data-testid="main">
      <Router>
        <Header
          url={LogoImage}
          name="Blinkist"
          handleExploreMenu={handleExploreMenu} //Clicking on explore menu item will open the dropdown menu
          exploreOption={exploreOption} //Toggle the drop-down menu on the left part of explore option
        />

        <Box
          sx={{
            position: "absolute",
            top: "93px",
            width: "100%",
          }}
        >
          <Routes>
            <Route // Main Content part of the home page
              path="/"
              element={
                <Home
                  trendingBlinks={trendingBlinks}
                  setTrendingBlinks={setTrendingBlinks}
                  justAdded={justAdded}
                  setJustAdded={setJustAdded}
                  featuredAudioBlinks={featuredAudioBlinks}
                  setFeaturedAudioBlinks={setFeaturedAudioBlinks}
                />
              }
            />
          </Routes>
          <Footer
            sx={{
              height: "367px",
              width: "100%",
              backgroundColor: "#F1F6F4",
              display: "flex",
              top: "100vh",
              padding: "24px 0px",
              marginTop: "24px",
              position: "sticky",
            }}
          />
          {exploreOption && <Explore data-testid="explore-box" />}
        </Box>
      </Router>
    </Box>
  );
};

export default TemplateComponent;
