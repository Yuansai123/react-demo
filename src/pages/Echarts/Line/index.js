import React,{Component} from 'react'
import {Card}  from  'antd'
import EchartsReact from 'echarts-for-react'
class Echarts extends Component{
    state = {
        option :{
            xAxis: {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',"八月",'九月','十月','十一月','十二月']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 160, 110, 90, 70, 110, 100,90,120,130,140,180],
                type: 'line',
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                    color: 'green',
                    width: 4,
                    type: 'dashed'
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: 'yellow',
                    color: 'blue'
                }
            }]
        }
    }
    render(){
        let {option} = this.state
        return(
            <div>
                <Card title='流浪猫死亡折线图'>
                    <EchartsReact option={option}></EchartsReact>
                </Card>
            </div>
        )
    }
}
export default Echarts;