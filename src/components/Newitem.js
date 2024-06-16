import React, { Component } from "react";

export default class Newitem extends Component {
  render() {
    let {title,discription, imgUrl,newsURL}=this.props;
    return (
      <div className="my-2">
        <div className="card m-1" style={{width: "18rem"}}>
          <img src={!imgUrl ? "https://c.ndtvimg.com/2024-06/u033l908_southwest-airlines_625x300_15_June_24.jpeg?ver-20240615.100": imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href={newsURL} target="blank" className="btn btn-sm btn-primary">
              Get Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}
