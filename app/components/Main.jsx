var React = require('react');
var Nav = require('Nav');
var MainFeed = require('MainFeed');
var Profile = require('Profile');

var Main = (props) => {
  return (
    <div className="">
      <div>
        <Nav />
      </div>
      <div className="main-container row">
        <div className="profile-container large-4 columns">
          <Profile
            bgImage="https://s5.postimg.org/ang2s2mdj/profilebackground.png"
            profileImage="https://s5.postimg.org/yd0x30vd3/profilepicture.png"
            verified="https://s5.postimg.org/3ub4i266f/verified.png"
            username="Vader01"
            locationIcon="https://s5.postimg.org/sz24vh5mv/locationicon.png"
            location="Los Angeles, CA"
            bio="I was in a bunch of movies. I have some robot parts. I practice space magic on the weekends. New to this Dust thing, friend me and together we can rule the galaxy."
            url="www.theempire.com"
            followers="50"
            following="55"
            />
        </div>
        <div className="large-8 columns main-feed">
          <MainFeed />
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
