import React, { Component } from 'react'

export default class Tour extends Component {

  state={
    showInfo: false
  }
handleClick = () => {
  this.setState({
    showInfo: !this.state.showInfo
  })
}
  render() {
    const {id, img, city, details} = this.props.info
    const {handleDelete} = this.props
    return (
      <div className=" top container">
        <div className="row">
          <div className="card col s12 l6">
            <div className="card-image">
              <img
                src={img}
                className="responsive-img materialboxed"
                heigth="200px"
                alt=""
              />
              <span onClick={() => handleDelete(id)}>{" "}<i className=" close fas fa-2x fa-window-close"></i></span>
              <a className="btn-floating halfway-fab waves-effect waves-light indigo pulse"><i className="material-icons">add</i></a>
            </div>
            
            <div className="card-content">
              <h5>City: {city}</h5>
              <span className="prefix" style={{ fontSize: "30px" }}>Info:{" "}</span>
              <span onClick={this.handleClick}><i className="fas fa-caret-square-down fa-2x indigo-text"></i></span>
              {this.state.showInfo && <p>{details}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

