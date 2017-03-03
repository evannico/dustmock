var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar nav-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/"> <img id="home-icon" src="https://s5.postimg.org/y2xzxf64n/home_on_3x.png" /> DUST</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form>
            <ul className="menu">
              <li>
                <input id="nav-search"type="search" ref="search" placeholder="Search"/>
              </li>
              <li>
                <Link><img src="https://s5.postimg.org/3rr8v82iv/profile_off_3x.png" /></Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
