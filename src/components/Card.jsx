import React, { Component } from 'react';
import { ReactComponent as DontPet } from '../images/DontPet.svg';
import { ReactComponent as Pet } from '../images/Pet.svg';
import { ReactComponent as Skip } from '../images/Skip.svg';

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card m-2">
        <div className="card-body">
          <img
            src="http://placekitten.com/200/100"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn">
            <DontPet /> <br />
            <span class="button-label">Dont Pet</span>
          </button>
          <button className="btn">
            <Skip /> <br />
            <span class="button-label">Skip</span>
          </button>
          <button className="btn">
            <Pet /> <br />
            <span class="button-label">Pet</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
