// App.js
import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import AutocompleteInput from "./components/AutocompleteInput";
import Map from "./components/Map";
import store from "./store/configureStore";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header>Google Place Autocomplete</Header>
        <Content style={{ padding: "20px" }}>
          <AutocompleteInput />
          <Map />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
