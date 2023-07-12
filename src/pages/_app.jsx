import "../styles/globals.css";
import Layout from "./containers/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
};

export default App;
