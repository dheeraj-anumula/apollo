import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Root'
import configureStore from 'store'

const store = configureStore()

function App(): ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

export default App
