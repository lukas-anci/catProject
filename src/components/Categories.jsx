import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Categories extends Component {
  render() {
    return (
      <div className="d-flex flex-wrap ">
        {this.props.catData.map((c) => (
          <CategoryItem key={c.id} catData={c} />
        ))}
      </div>
    );
  }
}

export default Categories;
