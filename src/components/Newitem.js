import React, { Component } from "react";

export default class Newitem extends Component {
  render() {
    let {title,discription}=this.props;
    return (
      <div>
        <div className="card m-1" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href="/newsDetails" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
