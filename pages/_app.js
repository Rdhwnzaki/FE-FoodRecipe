import Footer from "../components/Footer";
import Layouts from "../components/Navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SSRProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
