import { Container, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import theme from "./util/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" disableGutters>
          <div className="mainContainer">
            <Navbar />
            <div>
              <Routes />
            </div>
            <Footer />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
