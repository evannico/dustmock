var React = require('react');

var PostDetail = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">{props.name}</h3>
    </div>
  )
};

module.exports = PostDetail;
