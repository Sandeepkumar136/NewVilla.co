import React, { Component } from "react";
import Newitem from "./Newitem";

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center my-2 ">Top Headings</h2>
          <div className="row">
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
            <div className="col-md-3">
              <Newitem
                title="This is Top News"
                discription="This is new discripition"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
