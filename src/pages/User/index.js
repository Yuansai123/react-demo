import React,{Component} from 'react'
import { Card, Table, Spin, Button, Modal, message, Popconfirm,notification} from 'antd'
import style from './index.module.less'
import adminapi  from '../../api/admin'

class User extends Component{
    state = {
        array:[],
        visible: false,
        spinning:false,
        columns:[
            {
                title:'time',
                dataIndex:'create_time',
                key:'create_time'
            },
            {
                title:'用户名',
                dataIndex:'username',
                key:'username'
            },
            {
                title:'手机号',
                dataIndex:'phone',
                key:'phone'
            },
            {
                title:'邮箱',
                dataIndex:'email',
                key:'email'
            },
            {
                title:"操作",
                key:'action',
                render:(data)=>{
                    return(
                        <div>
                            <Popconfirm 
                            title='确定要删除这个用户吗?'
                            onConfirm={()=>{
                                this.del(data._id)
                            }}
                            onCancel={()=>{
                                message.error('取消删除')
                            }}>
                              <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
    }
    //调用删除接口
    del=async (_id)=>{
        //获取id 刷新页面
        let result = await adminapi.dels(_id)
        console.log(result)
        //确认是否成功返删除
        if(result.data.status !==0){return false}
        this.updataList()//刷新
    }
    handleOk =async ()=> {
        //绑定dom 获取value 添加接口调用 刷新数据 关闭模态框
        let username = this.refs.user.value
        let password = this.refs.ps.value
        let phone = this.refs.phone.value
        let email = this.refs.email.value
        // console.log({username,password,phone,email})
        let result = await adminapi.add({username,password,phone,email})
        //是否成功添加
        console.log(result)
        if(result.data.status !==0){return notification.error({message:'错误',description:'用户添加失败，请详细核对传输',duration:1.5})}
        notification.success({message:'成功',description:'用户添加成功',duration:1})
        this.setState({visible: false});
        this.updataList()//刷新
      };
      //模态框状态
      handleCancel =()=> {
        this.setState({visible: false});
      };
      //刷新
      updataList = async ()=>{
          //显示更新图标 调用获取接口 更新数据列表
          this.setState({spinning:true})
          let result = await adminapi.list()
          let res = result.data.data.users
          console.log(res)
          this.setState({array:res,spinning:false})
      }
      //挂载数据渲染界面
      componentDidMount(){
          this.updataList()
      }
    render(){
        let {array,columns,visible,spinning} = this.state 
        return(
            <div className={style.admins}>
                <Card title='用户列表'>
                    {/* 用户添加按钮 */}
                    <Button type='primary' icon='plus' onClick={()=>{
                        this.setState({visible:true})
                    }}>用户添加</Button>
                    <Spin size="small" spinning={spinning}>
                        <Table dataSource={array} columns={columns} rowKey='_id'/>
                    </Spin>
                    {/* 添加模态框 */}
                    <Modal title='用户添加'
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                      账户：<input type="text" ref='user' /><br/>
                      密码：<input type="text" ref='ps' /><br/>
                      手机：<input type="text" ref='phone' /><br/>
                      邮箱：<input type="text" ref='email' /><br/>
                    </Modal>
                </Card>
            </div>
        )
    }
}
export default User;