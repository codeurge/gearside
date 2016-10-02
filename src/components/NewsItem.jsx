import React from 'react';

const newsStyle = {
  height: '120px',
};

const NewsItem = (props) =>
  <div className="news-item col-xs-12 list-group-item" style={newsStyle}>
    <h6>{props.item.title}</h6>
    <span>{props.item.published}</span>
  </div>;

export default NewsItem;
