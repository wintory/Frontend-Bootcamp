import React, { Component } from 'react';
import './App.css';
import CoinRate from './coinrate'
import { Layout, Row, Col } from 'antd';
import FormApp from './form'
import Calculator from './calculator'

const { Header, Content, Footer } = Layout;


class App extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <FormApp />
          <Calculator />
        </Header>
        <Content style={{ padding: '50px' }}>
          <Row>

            <div style={{ background: '#C9EFAB', padding: 24, minHeight: 500 }}>
              <Col md={24}>
                <h1 className="">Bitcoin Rate</h1>
                <CoinRate />
              </Col>
            </div>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    );
  }
}

export default App;
