import "../styles/globals.css";
import Layout from "../components/Layout";

/**
 * designs
 */
import "../styles/topbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
