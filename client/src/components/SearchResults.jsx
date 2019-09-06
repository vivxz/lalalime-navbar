import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false
    }
  }

  render() {
    let { suggestedOptions, results, query, searchClicked } = this.props
    if (!searchClicked) {
      return null;
    }

    console.log(this.props.results);

    if (searchClicked && query.length >= 3) {
      return (
        <div className="fullscreen">
          <div className="search-box">
            <div className="suggested">
              <div className="suggest-header">
                <h3 className="suggest-title">TOP SUGGESTIONS</h3>
                <div className="line"></div></div>
              <div className="sugg">
                <img className="sugg-img" name="popular1" src={'./images/pan1.png'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
                <div className="sugg-title">Train Times Pant 25"</div></div>
              <div className="sugg">
                <img className="sugg-img" name="popular2" src={'./images/pan2.png'} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
                <div className="sugg-title">Groove Pants Bootcut 32"</div></div>
              <div className="sugg">
                <img className="sugg-img" name="popular3" src={'./images/pan3.png'}></img>
                <div className="sugg-title">Ready To Rulu Pant</div></div>
              <div className="sugg">
                <img className="sugg-img" name="popular4" src={'./images/pan4.png'}></img>
                <div className="sugg-title">Groove Pants Bootcut 32"</div></div>
            </div>
            <div className="word-suggest">
              <div className="word">{this.props.suggestedOptions.map(suggest => (
                <p className="word">{suggest}</p>
              ))}</div>
            </div>
          </div>
        </div>
      )
    }
    if (query.length > 0 && results.length > 0) {
      return (
        <div className="suggestions-box-searched">
          <div className="suggested">
            <div className="suggest-header">
              <h3 className="suggest-title">TOP SUGGESTIONS </h3>
              <div className="line"></div></div>
            <div className="sugg">
              <img className="sugg-img" name="popular1" src={results[0].images} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
              <div className="sugg-title"> {results[0].name}</div></div>
            <div className="sugg">
              <img className="sugg-img" name="popular2" src={results[1].images} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
              <div className="sugg-title"> {results[1].name}</div></div>
            <div className="sugg">
              <img className="sugg-img" name="popular3" src={results[2].images} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
              <div className="sugg-title"> {results[2].name}</div></div>
            <div className="sugg">
              <img className="sugg-img" name="popular4" src={results[2].images} onMouseOut={this.mouseOutImage} onMouseOver={this.mouseOverImage}></img>
              <div className="sugg-title"> {results[3].name}</div></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default SearchResults;
