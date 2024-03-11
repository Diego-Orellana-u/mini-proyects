import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import ShowPosts from './features/posts/ShowPosts'
import IndividualPost from './features/posts/IndividualPost'
import AddNewPost from './features/posts/AddNewPost'
import ModifyPost from './features/posts/EditPost'



function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddNewPost />
                <ShowPosts />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={IndividualPost} />
          <Route exact path="/editPost/:postId" component={ModifyPost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
