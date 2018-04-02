import React, { Component } from 'react';
import './App.css';
import CoinRate from './coinrate'
import { Layout } from 'antd';
import FormApp from './form'

const { Header, Content, Footer } = Layout;


class App extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <FormApp />
        </Header>
        <Content style={{ padding: '50px' }}>

          <div style={{ background: '#C9EFAB', padding: 24, minHeight: 300 }}>
            <h1 className="col-md-5 offset-5">Bitcoin Rate</h1>
            <CoinRate />
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    );
  }
}

export default App;
