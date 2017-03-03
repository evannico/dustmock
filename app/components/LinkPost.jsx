var React = require('react');

var LinkPost = (props) => {
  return (
    <div className="post">
      <img className="post-profile" src={props.postProfile}></img>
      <div className="post-info">
        <p className="post-display-name">{props.postDisplay}</p>
        <p className="post-username">@{props.postUsername}</p>
        <p className="post-ttl">{props.ttl}</p>
      </div>
      <img className="post-menu" src="https://s5.postimg.org/psc6plakn/postmenu.png"></img>

      <div className="post-body-container">
        <p className="post-body">{props.postBody}</p>
      </div>

      <div className="link-preview">
        <img className="link-image" src={props.linkImage}></img>
        <p className="link-title">{props.linkTitle}</p>
        <p className="link-URL">{props.linkURL}</p>
      </div>

      <div className="post-buttons">
        <img src="https://s5.postimg.org/inudgk3bb/reply_copy_3x.png" className="post-comment"></img>
        <div>
          <img src="https://s5.postimg.org/xiiyuqcw7/reblasts_copy_3x.png" className="post-share"></img>
          <p className="counter">{props.shares}</p>
        </div>
        <div>
          <img src="https://s5.postimg.org/r3jxy266f/heart_copy_2_3x.png" className="post-like"></img>
          <p className="counter">{props.likes}</p>
        </div>
        <img src="https://s5.postimg.org/cj2v38b7r/dm_copy_3x.png" className="post-dm"></img>

      </div>
    </div>
  )
};

module.exports = LinkPost;
