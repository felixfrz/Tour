import React, { Component } from "react";
import Navbar from "./Navbar";
import Tour from "./Tour";
import "./index.css";
import Footer from './Footer'
import Remove from './Remove'

export default class App extends Component {
  state = {
    tours: [
      {
        id: 1,
        img: "./img/city.jpg",
        city: "Akure",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
      {
        id: 2,
        img: "./img/man.jpg",
        city: "Ondo",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
      {
        id: 3,
        img: "./img/nature.jpg",
        city: "Lagos",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
      {
        id: 4,
        img: "./img/portrait.jpg",
        city: "Eko",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
      {
        id: 5,
        img: "./img/stars.jpg",
        city: "Owo",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
      {
        id: 6,
        img: "./img/street.jpg",
        city: "Ado-Ekiti",
        details:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis officiis excepturi laudantium saepe laboriosam!",
      },
    ],
  };

  handleDelete = (id) => {
    const sorted = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sorted,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        {this.state.tours.map((tour) => (
          <Tour info={tour} key={tour.id} handleDelete={this.handleDelete} />
        ))}
        <Footer />
        
          <Remove data={this.state.tours}/>
      </div>
    );
  }
}
