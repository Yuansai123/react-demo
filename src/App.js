import React,{Component} from 'react';
import {HashRouter,Route} from 'react-router-dom'
// import Son from './test/index'
import EchartsPie from './pages/Echarts/Pie'
import EchartsBar from './pages/Echarts/Bar'
import EchartsLine from './pages/Echarts/Line'
import Login from './pages/Login/index'
import Admin from './pages/admin'
import Administartor from './pages/Administartor'
import User from './pages/User'

class App extends Component{
  render(){
    return (
      <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
              <Route path='/admin/user' component={User}></Route>
              <Route path='/admin/echarts/pie' component={EchartsPie}></Route>
              <Route path='/admin/echarts/bar' component={EchartsBar}></Route>
              <Route path='/admin/echarts/line' component={EchartsLine}></Route>
              <Route path='/admin/administartor' component={Administartor}></Route>
            </Admin>
          )
        }}></Route>
        
      </HashRouter>
    )
  }
}

export default App;
