import React, { Component } from "react";
import Newitem from "./Newitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7eed526b2ad547138ad720a811900fbe";

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center my-2 ">Top Headings</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newitem
                  title={element.title ? element.title.slice(0, 44):""}
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
      </div>
    );
  }
}
