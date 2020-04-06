import React,{Component} from 'react'
import { Card, Table,  } from 'antd'
import style from './index.module.less'

class Admin extends Component{
    state = {
        dataSource:[],
        columns:[
            {
                title:'id',
                dataIndex:'_id',
                key:'_id'
            },
            {
                title:'账号',
                dataIndex:'username',
                key:'username'
            },
            {
                title:"操作",
                key:'action',
                render:()=>{

                }
            }
        ]
    }
    render(){
        let {dataSource,columns} = this.state 
        return(
            <div className={style.admins}>
                <Card title='管理员列表'>
                    <Table dataSource={dataSource} columns={columns}></Table>
                   
                </Card>
            </div>
        )
    }
}
export default Admin;