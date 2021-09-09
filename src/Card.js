import { Component } from "react";

class Card extends Component {
  render() {
    const {
      head: { price, period, title },
      features,
      button,
    } = this.props.details;
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {title}
            </h5>
            <h6 className="card-price text-center">
              ${price}
              <span className="period">/{period}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {features.map(({ title, avaiable }, index) => {
                if (avaiable) {
                  return (
                    <li key={index}>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <h1>{title}</h1>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      {title}
                    </li>
                  );
                }
              })}
            </ul>
            <div className="d-grid">
              <a href={button} className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
