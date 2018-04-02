import React, { Component } from 'react'
import axios from 'axios'
import { Select, Row, Col } from 'antd';
import { log } from 'util';

export default class CoinRate extends Component {

    state = {
        Rate: [],
        show: '',
        showRate: '',
        loading: '',
        counter: 0

    }


    async componentDidMount() {

        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        await axios
            .get(url)
            .then(res => {
                const re = res.data;
                this.setState({
                    Rate: [{ name: re.bpi.EUR.code, rate: re.bpi.EUR.rate },
                    { name: re.bpi.GBP.code, rate: re.bpi.GBP.rate },
                    { name: re.bpi.USD.code, rate: re.bpi.USD.rate },
                    ],
                    showRate: re.bpi.USD.rate,
                    show: re.bpi.USD.code,
                    loading: '',
                    counter: this.state.counter + 1
                });
            })

        setInterval(
            () => {

                const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
                setTimeout(() => {
                    axios
                        .get(url)
                        .then(res => {
                            const re = res.data;
                            this.setState({
                                Rate: [{ name: re.bpi.EUR.code, rate: re.bpi.EUR.rate },
                                { name: re.bpi.GBP.code, rate: re.bpi.GBP.rate },
                                { name: re.bpi.USD.code, rate: re.bpi.USD.rate },
                                ],
                                loading: '',
                                counter: this.state.counter + 1
                            });
                        })
                }, 1500)

                this.setState({
                    loading: 'hidden'
                })

            }
            , 5000);
    }


    handleChange = (value) => {
        this.setState({
            show: value
        })
        this.state.Rate.filter(e => {
            if (value === e.name) {
                this.setState({
                    showRate: e.rate
                })
            }
        }
        )
    }

    render() {
        const Option = Select.Option;
        return (
            <div>
                {this.state.counter}
                <div className={this.state.loading ? 'hidden' : ''}>
                    <Row>
                        <Col span={4} push={8}>

                            <Select defaultValue="USD" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="USD">USD</Option>
                                <Option value="EUR">EUR</Option>
                                <Option value="GBP">GBP</Option>
                            </Select>
                        </Col>
                        <Col span={4} push={8}>
                            <h5>{this.state.show} : {this.state.showRate}</h5>
                        </Col>
                    </Row>
                </div >
                <div className={this.state.loading ? '' : 'hidden'}>
                    <Col span={4} push={11}>
                        <div className="loader" />
                    </Col>
                </div>
            </div>
        )
    }
}