import React, { Component, PropTypes } from 'react'; import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Infinite from 'react-infinite';
import * as actionCreators from '../redux/actions/news';
import NewsItem from '../components/NewsItem';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    }
  }

  handleInfiniteLoad() {
    if (this.props.news && this.props.loading === false && this.props.finishedLoading === false) {
      setTimeout(() => {
        this.props.fetchNews(this.state.page)
        this.setState({ ...this.state, page: this.state.page + 1 })
      }, 500)
    }
  }

  elementInfiniteLoad() {
    if (this.props.finishedLoading === false) {
      return <div className="news-item">
        Loading...
      </div>;
    }
  }

  render() {
    const { news } = this.props;
    return (
      <div className="news-list row card">
        <ul className="list-group list-group-flush">
          <Infinite
            containerHeight={200}
            elementHeight={100}
            infiniteLoadBeginEdgeOffset={200}
            loadingSpinnerDelegate={this.elementInfiniteLoad()}
            onInfiniteLoad={() => this.handleInfiniteLoad()}
            useWindowAsScrollContainer
          >
            {news.map((item, i) => <NewsItem item={item} key={i} />)}
          </Infinite>
        </ul>
      </div>
    );
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  finishedLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    news: state.news,
    loading: state.loading,
    finishedLoading: state.finishedLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
