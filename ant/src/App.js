import "./App.css";

import AppHeader from "./components/common/header";
import AppHome from "./views/home";
import AppFooter from "./components/common/footer";

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>

    </Layout>
  );
}

export default App;
