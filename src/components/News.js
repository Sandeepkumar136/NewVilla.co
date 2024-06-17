import React, { Component } from "react";
import Newitem from "./Newitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7eed526b2ad547138ad720a811900fbe&pageSize=20";

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  handlePerClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7eed526b2ad547138ad720a811900fbe&page=${
      this.state.page - 1
    }&pageSize=20`;

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7eed526b2ad547138ad720a811900fbe&page=${
        this.state.page + 1
      }&pageSize=20`;

      let data = await fetch(url);

      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center my-2 ">Top Headings</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newitem
                  title={element.title ? element.title.slice(0, 44) : ""}
                  discription={
                    element.description ? element.description.slice(0, 87) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between mb-2">
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePerClick}
          >
            &larr; Perviews
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
