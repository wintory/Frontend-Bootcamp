import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinRate from './coinrate'
import { Select, Layout } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends Component {


  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            <CoinRate />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Homework 8-1
    </Footer>
      </Layout>
    );
  }
}

export default App;
