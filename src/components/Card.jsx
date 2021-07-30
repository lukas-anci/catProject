import React, { Component } from 'react';
import { ReactComponent as DontPet } from '../images/DontPet.svg';
import { ReactComponent as Pet } from '../images/Pet.svg';
import { ReactComponent as Skip } from '../images/Skip.svg';
import axios from 'axios';
const apiKey = '26be2bb2-7860-4c85-937d-13e8c705a202';
let config = {
  headers: {
    'x-api-key': apiKey,
  },
};
class Card extends Component {
  state = {
    catImg: '',
  };

  componentDidMount() {
    this.getCatImg();
    // this.fuktion();
  }

  fuktion = () => {
    const letstry = this.props.catData.filter(
      (e) => e.name === this.state.catImg.categories[0].name
    );
    console.log('pls work', letstry);
  };

  getCatImg = async () => {
    try {
      const allImages = await axios.get(
        'https://api.thecatapi.com/v1/images/search',
        config
      );
      if (Array.isArray(allImages.data) && allImages.data.length) {
        this.setState({ catImg: allImages.data[0] });
      }
      console.log('allImages.data', allImages.data);
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    console.log('thisstate', this.state.catImg.categories);
    return (
      <div className="d-flex justify-content-center">
        <div className="card h-25 w-25 m-2">
          <div className="card-body">
            <img
              src={this.state.catImg && this.state.catImg.url}
              className="card-img-top auto"
              alt="..."
            />
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn">
              <DontPet /> <br />
              <span className="button-label">Dont Pet</span>
            </button>
            <button onClick={this.getCatImg} className="btn">
              <Skip /> <br />
              <span className="button-label">Skip</span>
            </button>
            <button className="btn">
              <Pet /> <br />
              <span className="button-label">Pet</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
