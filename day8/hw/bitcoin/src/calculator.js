import React, { Component } from 'react'
import { Button, Modal, Col, Input } from 'antd'
const ButtonGroup = Button.Group
const TextArea = Input

class Calculator extends Component {
    state = {
        result: '',
        number: [],
        operation: [],
        visible: false,
        value: ''
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    addNumber = (e) => {
        this.setState({
            number: [...this.state.number, e]
        })
        console.log(this.state.number);
    }

    addValue = (e) => {

        this.setState({
            value: e
        })
    }

    render() {
        return (
            <div >
                <Col span={4} push={18}>
                    <Button type="primary" onClick={this.showModal}>Open Calculator</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <div className="col-md-6">
                            <div>
                                <input type="text" value={this.state.value} />
                            </div>
                            <ButtonGroup>
                                <Button onClick={() => { this.addNumber('1') }}>(</Button>
                                <Button>)</Button>
                                <Button>%</Button>
                                <Button>c</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup>
                                <Button onClick={() => { this.addNumber(7) }}>7</Button>
                                <Button onClick={() => { this.addNumber(8) }}>8</Button>
                                <Button onClick={() => { this.addNumber(9) }}>9</Button>
                                <Button onClick={() => { this.addNumber('/') }}>/</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup>
                                <Button onClick={() => { this.addNumber(4) }}>4</Button>
                                <Button onClick={() => { this.addNumber(5) }}>5</Button>
                                <Button onClick={() => { this.addNumber(6) }}>6</Button>
                                <Button onClick={() => { this.addNumber('x') }}>x</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup>
                                <Button onClick={() => { this.addNumber(1) }}>1</Button>
                                <Button onClick={() => { this.addNumber(2) }}>2</Button>
                                <Button onClick={() => { this.addNumber(3) }}>3</Button>
                                <Button onClick={() => { this.addNumber('-') }}>-</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup>
                                <Button onClick={() => { this.addNumber(0) }}>0</Button>
                                <Button onClick={() => { this.addNumber('.') }}>.</Button>
                                <Button onClick={() => { this.getValue }}>=</Button>
                                <Button onClick={() => { this.addNumber('+') }}>+</Button>
                            </ButtonGroup>
                        </div>
                    </Modal>

                </Col>
            </div>
        )
    }
}

export default Calculator