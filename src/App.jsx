import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Categories from './components/Categories';

const apiKey = '32eb8fc7-e83e-482e-96b7-1c7c2835dca6';

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
      <div className="App">
        <Categories />
      </div>
    );
  }
}

export default App;
