import React from "react";

import Card from "./Card";
import priceCard from "./priceCard.json";

class PriceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceCard: [],
    };
  }
  componentDidMount() {
    this.setState({ priceCard });
  }
  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {this.state.priceCard.map((card, index) => {
              return <Card key={index} details={card} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default PriceCard;
