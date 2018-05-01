import React from 'react';
import PropTypes from 'prop-types';
import HighlightsList from "./HighlightsList";
import {PROXY_URL_FILE} from "../../../api/proxy-api";

export default ArticlesListItem;

function ArticlesListItem({article}) {
  return (
    <li className="border-bottom">
      <h5><a href={`${PROXY_URL_FILE}?Id=${article._id}`}>{article.filename}</a></h5>
      <h6 hidden={!article.author}>Автор: {article.author}</h6>
      <h6 hidden={!article.title}>Название: {article.title}</h6>
      <h6 hidden={!article.date}>Дата: {new Date(article.date).toDateString()}</h6>
      <HighlightsList highlights={article.highlights} />
    </li>
  );
}

ArticlesListItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
  })
};

ArticlesListItem.defaultProps = {
  article: {}
};
