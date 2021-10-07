import { Container, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import theme from "./util/theme";
import { WalletProvider } from '@react-dapp/wallet'

function App() {
  return (
    <>
      <WalletProvider>
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
      </WalletProvider>
    </>
  );
}

export default App;
