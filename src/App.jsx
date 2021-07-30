import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Categories from './components/Categories';
import Card from './components/Card';

const apiKey = '26be2bb2-7860-4c85-937d-13e8c705a202';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    try {
      const allCategories = await axios.get(
        'https://api.thecatapi.com/v1/categories',
        {
          headers: {
            'x-api-key': apiKey,
          },
        }
      );
      console.log('allCategories.data', allCategories.data);
      if (Array.isArray(allCategories.data) && allCategories.data.length) {
        this.setState({ data: allCategories.data });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  render() {
    return (
      <div className="App container">
        <Categories catData={this.state.data} />
        <Card catData={this.state.data} />
      </div>
    );
  }
}

export default App;
