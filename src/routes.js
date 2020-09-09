import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Albumlist from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum'
import NotFound from './components/NotFound'
import { Switch, Route } from 'react-router-dom'

export default <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/albums' component={Albumlist} />
  <Route path='/albums/:id' component={SingleAlbum} />
  < Route component={NotFound} />
</Switch>