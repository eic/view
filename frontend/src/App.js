import React, { useState } from 'react'
import Home from './Home'
import Navigation from './Navigation'
import Footer from './Footer'
import { Redirect, Route, Switch } from 'react-router-dom'
import { localStore, StoreProvider } from '@ndmspc/react-ndmbase'
import {
  JSROOTProvider,
  JSROOTExample,
  JSROOTDisplayFromFile,
  JSROOTBrowser
} from '@ndmspc/react-jsroot'

let store = {
  timeoutStore: localStore(),
  filesStore: localStore(),
  drawStore: localStore(),
  padsStore: localStore()
}

function App() {
  const [options] = useState(['', 'fixed', 'proX', 'proY'])

  function MyHistHover(info) {
    if (!info) {
      return false
    }

    console.log('Hover: ' + info.binx + ' ' + info.biny)
    let { pads } = JSON.parse(window.localStorage.getItem('JSROOTPads'))

    if (pads.length < 1 || pads[0] === null || pads[0] === '') {
      return false
    }
    const JSROOT = window.JSROOT

    const h1 = JSROOT.createHistogram('TH1I', info.obj.fYaxis.fNbins)

    h1.fXaxis.fXmin = info.obj.fYaxis.fXmin
    h1.fXaxis.fXmax = info.obj.fYaxis.fXmax

    for (let n = 0; n < h1.fXaxis.fNbins; n++)
      h1.setBinContent(n + 1, info.obj.getBinContent(info.binx, n + 1))
    h1.fName = 'px'
    h1.fTitle = 'Projection of binX=' + (info.binx - 1)

    const h2 = JSROOT.createHistogram('TH1I', info.obj.fXaxis.fNbins)
    h2.fXaxis.fXmin = info.obj.fXaxis.fXmin
    h2.fXaxis.fXmax = info.obj.fXaxis.fXmax
    for (let n = 0; n < h2.fXaxis.fNbins; n++) {
      h2.setBinContent(n + 1, info.obj.getBinContent(n + 1, info.biny))
    }

    h2.fName = 'py'
    h2.fTitle = 'Projection of binY=' + (info.biny - 1)

    for (var i = 0; i < pads.length; i++) {
      if (pads[i] === 'proX') {
        JSROOT.redraw('proj' + i, h1)
      } else if (pads[i] === 'proY') {
        JSROOT.redraw('proj' + i, h2)
      }
    }

    return true
  }
  function MyHistClick(info) {
    if (!info) {
      return false
    }
    console.log('Click: ' + info.binx + ' ' + info.biny)
    return true
  }
  function MyHistDblClick(info) {
    if (!info) {
      return false
    }
    console.log('DblClick: ' + info.binx + ' ' + info.biny)
    return true
  }

  return (
    <StoreProvider store={store}>
      <JSROOTProvider src='https://root.cern.ch/js/latest/scripts/JSRoot.core.js'>
        <Navigation />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/example' component={JSROOTExample} />
          <Route exact path='/browser'>
            <JSROOTBrowser
              id='hist1'
              filename='https://root.cern.ch/js/files/hsimple.root'
              obj='hpxpy;1'
              drawOptions='colz'
              displayType='simple'
            />
          </Route>
          <Route exact path='/projections'>
            <JSROOTDisplayFromFile
              id='dff'
              onHover={MyHistHover}
              onClick={MyHistClick}
              onDblClick={MyHistDblClick}
              options={options}
            />
          </Route>
          <Redirect to='/home' from='/' />
        </Switch>
        <Footer></Footer>
      </JSROOTProvider>
    </StoreProvider>
  )
}

export default App
