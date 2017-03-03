var React = require('react');

var Profile = (props) => {
  return (
    <div className="profile">
      <img className="background" src={props.bgImage}></img>
      <img className="profile-picture" src={props.profileImage}></img>
      <div className="user-text">
        <div className="right-profile">
          <p className="display-name">Vader</p>
          <img className="verified" src={props.verified}></img>
          <p className="username">@{props.username}</p>
        </div>
        <div className="location">
          <img className="location-icon" src={props.locationIcon}></img>
          <p className="location-text">{props.location}</p>
        </div>
      </div>
      <div className="bio">
        <p>{props.bio}</p>
      </div>
      <div className="bio-url">
        <a href={'http://' + props.url}>{props.url}</a>
      </div>
      <div className="stats">
        <div>
          <span className="number">{props.followers}</span><span className="stats-label">Followers</span>
        </div>
        <div>
          <span className="number">{props.following}</span><span className="stats-label">Following</span>
        </div>
      </div>
    </div>
  )
};

module.exports = Profile;
