import React, { Component } from 'react';
import './App.css';
import './index.css'
import CoinRate from './coinrate'
import { Layout, Row, Col } from 'antd';
import FormApp from './form'
import Calculator from './calculator'

const { Header, Content, Footer } = Layout;


class BitCoin extends Component {

  state = {
    col: 'GBP'
  }

  componentDidMount() {
    if (this.props.match.params.name !== '') {
      this.setState({
        col: this.props.match.params.name
      })
    }
  }

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
                <CoinRate dol={this.state.col} />
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

export default BitCoin;
