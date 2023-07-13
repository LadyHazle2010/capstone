import Layout from "./hocs/Layout";
import { BrowserRouter } from "react-router-dom";
import Routes from "./hocs/Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
