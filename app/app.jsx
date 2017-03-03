var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var PostDetail = require('PostDetail');
var MainFeed = require('MainFeed');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="post-detail" component={PostDetail}/>
      <IndexRoute componenet={MainFeed}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
