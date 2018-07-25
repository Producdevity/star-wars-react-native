// React
import React, { Component } from 'react'
import { SafeAreaView }     from 'react-navigation'

// Navigator
import AppNavigator from './src/config/navigator'

// Redux
import { Provider } from 'react-redux'
import store        from './src/store'


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <SafeAreaView style={{flex: 1}}>
            <AppNavigator/>
          </SafeAreaView>
        </Provider>
    )
  }
}