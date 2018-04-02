import React, { Component } from 'react'
import axios from 'axios'
import { Select, Row, Col } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default class CoinRate extends Component {

    state = {
        Rate: [],
        show: '',
        showRate: '',
        loading: '',
        counter: 0,
        data: [],
        dataName: [],
        dataTime: '',
        graphLoading: ''
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

        await this.fetchGraph("USD")

        await setInterval(
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
                                counter: this.state.counter + 1,
                                dataTime: new Date().toLocaleString(),
                            });
                        })
                }, 1500)

                this.setState({
                    loading: 'hidden'
                })

            }
            , 15000);
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
            return null
        }
        )
        this.fetchGraph(value)
    }

    fetchGraph = (value) => {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=usd'
        setTimeout(() => {
            axios
                .get(url)
                .then(res => {
                    const re = res.data
                    this.setState({
                        dataName: Object.keys(re.bpi),
                        dataTime: new Date().toLocaleString(),
                        graphLoading: ''
                    })

                    this.state.dataName.map(e => {
                        this.setState({
                            data: [...this.state.data,
                            { 'name': e, 'price': re.bpi[e] }]
                        })
                        //console.log(this.state.data);
                        return null
                    }
                    )
                })
        }, 1000)

        this.setState({
            graphLoading: 'hidden'
        })

    }

    render() {
        const Option = Select.Option;
        return (
            <div>
                counter : {this.state.counter}
                <br />
                Last Update : {this.state.dataTime}
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
                    <br />
                    <br />
                    <div className={this.state.graphLoading ? 'hidden' : ''}>
                        <Row>
                            <Col span={4} push={5}>
                                <LineChart width={730} height={250} data={this.state.data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="price" stroke="red" />
                                </LineChart>
                            </Col>
                        </Row>
                    </div>
                    <div className={this.state.graphLoading ? '' : 'hidden'}>
                        <Col span={4} push={11}>
                            <div className="loader" />
                        </Col>
                    </div>
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