import React, { Component } from 'react'
import { Modal, Button, Col, Form, Icon, Input, Checkbox } from 'antd'
const FormItem = Form.Item;

export default class FormApp extends Component {

    state = {
        loading: false,
        visible: false,
        email: '',
        password: '',
        confirmPass: '',
        phone: [],
        confphone: '',
        emailStatus: 'hidden',
        passwordStatus: 'hidden',
        confStatus: 'hidden',
        phoneStatus: 'hidden',
        i: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {

        if (this.state.email !== '' && this.state.password !== '' && this.state.confirmPass !== '' && this.state.phone !== '') {
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ loading: false, visible: false });
            }, 3000);
            alert('submit complete')
            console.log('email : ' + this.state.email + ' , phone : ' + this.state.phone + ' , password : ' + this.state.password);

        } else {
            alert('please input form')
        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    chkEmail = (e) => {
        if (e.indexOf('@') !== -1 && e.indexOf('.') !== -1) {
            this.setState({ email: e, emailStatus: 'hidden' })
        } else {
            this.setState({
                email: '',
                emailStatus: ''
            })
        }
    }


    chkPassword = (e) => {
        if (e.length > 6) {
            this.setState({ password: e, passwordStatus: 'hidden' })
        } else {
            this.setState({
                password: '',
                passwordStatus: ''
            })
        }
    }

    chkConf = (e) => {
        if (this.state.password === e) {
            this.setState({ confirmPass: e, confStatus: 'hidden' })
        } else {
            this.setState({
                confirmPass: '',
                confStatus: ''
            })
        }
    }

    chkPhone = (e) => {

        this.setState({
            phone: [...this.state.phone, e.charAt(e.length - 1)]
        })

        this.state.phone.map(phone => {
            if ((phone.keyCode >= 48 && phone.keyCode <= 57) || (phone.keyCode >= 96 && phone.keyCode <= 105)) {
                this.setState({
                    confphone: this.state.confphone + phone,
                    phoneStatus: 'hidden'
                })
                console.log(phone);

            } else {
                this.setState({
                    confphone: '',
                    phoneStatus: ''
                })
                return null
            }
        })


        // if (e.length === 10) {
        //     this.setState({ phone: e, phoneStatus: 'hidden' })
        // } else {
        //     this.setState({
        //         phone: '',
        //         phoneStatus: ''
        //     })
        // }

    }

    render() {
        const { visible, loading } = this.state;
        return (
            <Col span={4} push={20}>
                <Button type="primary" onClick={this.showModal}>Open form</Button>
                <Modal
                    title="Hello !"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <Form className="login-form">
                        <FormItem>
                            {(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" onChange={e => this.chkEmail(e.target.value)} />
                            )}
                            <p className={this.state.emailStatus ? 'hidden' : ''} style={{ color: 'red ' }}>invalid email form</p>
                        </FormItem>
                        <FormItem>
                            {(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={e => this.chkPassword(e.target.value)} />
                            )}
                            <p className={this.state.passwordStatus ? 'hidden' : ''} style={{ color: 'red ' }}>password must be more than 6 chars</p>
                        </FormItem>
                        <FormItem>
                            {(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" onChange={e => this.chkConf(e.target.value)} />
                            )}
                            <p className={this.state.confStatus ? 'hidden' : ''} style={{ color: 'red ' }}>password not match</p>
                        </FormItem>
                        <FormItem>
                            {(
                                <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="pnone number" onChange={e => this.chkPhone(e.target.value)} />
                            )}
                            <p className={this.state.phoneStatus ? 'hidden' : ''} style={{ color: 'red ' }}>invalid phone</p>
                        </FormItem>
                    </Form>
                </Modal>
            </Col>
        )
    }
}