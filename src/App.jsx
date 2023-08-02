import { useState } from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import Items from './Items'
import Cart from './Cart'

function App() {

  return (
    <RecoilRoot>
      <div>
        <h1 className='nav'>Welcome to Recoil Store.</h1>
        <Items />
        <Cart />
      </div>
    </RecoilRoot>
  )
}

export default App
