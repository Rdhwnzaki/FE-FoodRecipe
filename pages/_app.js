import Footer from "../components/Footer";
import Layouts from "../components/Layouts";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
