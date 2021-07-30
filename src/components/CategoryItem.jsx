import React, { Component } from 'react';

class CategoryItem extends Component {
  state = {
    filterData: [],
  };
  render() {
    const { catData: c } = this.props;
    return (
      <div className="card m-2 ">
        <img
          src="http://placekitten.com/200/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <button type="submit" class="btn btn-primary mx-auto d-block">
            {c.name}
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
