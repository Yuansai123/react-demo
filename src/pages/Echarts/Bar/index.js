import React,{Component} from 'react'
import {Card} from 'antd'
import EchartsReact from 'echarts-for-react';
class EchartsBar extends Component{
    state={
        option:{
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2018', '2019', '2020'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        }
    }
    render(){
        let {option} = this.state
        return(
            <div>
                <Card  title="柱状图" >
                    <EchartsReact option={option}></EchartsReact>
                </Card>
            </div>
        )
    }
}
export default EchartsBar;