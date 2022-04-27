import MyLibrary from "../../../component/page/MyLibrary";
import Home from "../../../component/page/Home";
import Header from "../../../component/organism/Header";
import BookInfo from "../../../component/page/BookInfo";
import LogoImage from "../../../assets/Image/Logo/Blinkist_Logo.png";
import Explore from "../../../component/organism/Explore";
import Footer from "../../../component/organism/Footer";
import { Box, Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";

const TemplateComponent = () => {
  const [exploreOption, setExploreOption] = useState<boolean>(false);

  const handleExploreMenu = () => {
    setExploreOption(!exploreOption);
  };

  const [trendingBlinks, setTrendingBlinks] = useState<any>(null);
  const [justAdded, setJustAdded] = useState<any>(null);
  const [featuredAudioBlinks, setFeaturedAudioBlinks] = useState<any>(null);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState<any>(null);
  const [finishedReadingBooks, setFinishedReadingBooks] = useState<any>(null);
  const [library, setLibrary] = useState<any>(null);

  useEffect(() => {
    const bookData = async () => {
      let response = await fetch("./json/trendingBlinks.json");
      let trendingBooks = await response.json();

      setTrendingBlinks(trendingBooks);

      response = await fetch("./json/justAdded.json");
      let justAddedBooks = await response.json();
      setJustAdded(justAddedBooks);

      response = await fetch("./json/featuredAudioBlinks.json");
      let audioBlinks = await response.json();
      setFeaturedAudioBlinks(audioBlinks);

      response = await fetch("./json/currentlyReadingBooks.json");
      let currentReadingBooks = await response.json();
      setCurrentlyReadingBooks(currentReadingBooks);
      // console.log("currentReadingBooks", currentReadingBooks);
      // console.log("currentlyReadingBooks", currentlyReadingBooks);

      response = await fetch("./json/finishedBooks.json");
      let finishedBooks = await response.json();
      setFinishedReadingBooks(finishedBooks);
      // console.log("finishedBooks",);
      // console.log("finishedBooks", finishedBooks);
      // console.log("finishedReadingBooks", finishedReadingBooks);

      response = await fetch("./json/library.json");
      let libraryBooks = await response.json();
      setLibrary(libraryBooks);
      // console.log("library", libraryBooks);
      // console.log("setLIb", setLibrary);
      // console.log("finishedBooks");
    };

    bookData();
  }, []);

  return !library || !trendingBlinks || !justAdded || !featuredAudioBlinks ? (
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
            <Route // for all the My LIbrary part(Currently reading & Finished)
              path="/library"
              element={
                <MyLibrary
                  currentlyReadingBooks={currentlyReadingBooks}
                  setCurrentlyReadingBooks={setCurrentlyReadingBooks}
                  finishedReadingBooks={finishedReadingBooks}
                  setFinishedReadingBooks={setFinishedReadingBooks}
                  library={library}
                  setLibrary={setLibrary}
                />
              }
            />
            <Route
              path="bookInfo/:bookId"
              element={
                <BookInfo
                  library={library}
                  setLibrary={setLibrary}
                  // bookId={id}
                  // currentlyReadingBooks={currentlyReadingBooks}
                  // setCurrentlyReadingBooks={setCurrentlyReadingBooks}
                  // finishedReadingBooks={finishedReadingBooks}
                  // setFinishedReadingBooks={setFinishedReadingBooks}
                />
              }
            />
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
                  library={library}
                  setLibrary={setLibrary}
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
