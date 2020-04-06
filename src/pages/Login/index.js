import React,{Component} from 'react'
import {Input,Form,Checkbox,Button,message,Icon} from 'antd'
import api from '../../api/login'
import style from './index.module.less'
class Login extends Component{
    login=()=>{
        console.log('登录',this)
        let {validateFields} = this.props.form //获取表单数据
        validateFields((err,data)=>{
            console.log(err,data)
            if(err){
                //输入有误
                message.error('输入有误请重试')
            }else{//调用接口
                api.login(data).then((res)=>{
                    console.log(res)
                    if(res.data.status===404){
                        message.error('用户名密码错误')
                    }else{//登录成功后设置localstorage
                        localStorage.setItem('token',res.token)
                        message.success('登录成功，3秒后跳转首页',3,()=>{
                        this.props.history.replace('/admin') })
                    }
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={style['login-box']}>
            <div className={style['login-form']}>
                    {/* 用户名 */}
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' },
                        {min:3,message:'用户名最小长度3位'},
                        {max:18,message:'用户名最大长度18位'}],
                        })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                </Form.Item>
                {/* 密码 */}
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' },
                        {min:3,message:'密码最小长度6位'},
                        {max:18,message:'密码最大长度18位'}],
                        })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                </Form.Item>
                {/* 记住我  提交*/}
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href='//#endregion' >
                        Forgot password
                    </a>
                    <Button type="primary" onClick={this.login} className="login-form-button">
                        Log in
                    </Button>
                    Or <a href='//#endregion'>register now!</a>
                </Form.Item>
            </div>
            </div>
        )
    }
}
export default  Form.create()(Login);