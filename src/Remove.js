import React, { Component } from 'react'

export class Remove extends Component {
  state = {
    users: [
      { id: 10, firstName: 'Frz', lastName: 'Felix', age: 12 },
      { id: 20, firstName: 'Doe', lastName: 'Fel', age: 88 },
      { id: 30, firstName: 'John', lastName: 'Doe', age: 66 },
    ],
  }

  handleDelete = (id) => {
    const sorted = this.state.users.filter((user) => {
      return user.id !== id
    })

    this.setState({
      users: sorted,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const { img } = this.props.data[1]

    const data = this.state.users.map((user) => (
      <ul className='collection'>
        <li class='collection-item avatar'>
          <img src={img} alt='' class='circle'></img>
          <span class='title'>Details</span>
          <p>
            First Name: {user.firstName} <br />
            Last Name: {user.lastName}
            <br />
            Age: {user.age}
          </p>
          <span
            class='secondary-content'
            onClick={() => this.handleDelete(user.id)}
          >
            <i class='material-icons'>delete</i>
          </span>
        </li>
      </ul>
    ))

    return (
      <section>
        <nav className='nav-wrapper green darken-4'>
          <div className='container'>
            <a href='#' className='brand-logo'>
              Second project
            </a>
            <a href='#' className='sidenav-trigger' data-target='link'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Felix</a>
              </li>
              <li>
                <a href='#'>Ayodeji</a>
              </li>
            </ul>

            <ul className='sidenav' id='link'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Felix</a>
              </li>
              <li>
                <a href='#'>Ayodeji</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>{data}</div>

        <div className='container'>
          <form style={{ minWidth: '200px' }} onSubmit={this.handleSubmit}>
            <div className='input-field'>
              <i className='material-icons prefix'>person</i>
              <input type='text' />
              <label>First Name</label>
            </div>
            <div className='input-field'>
              <i className='material-icons prefix'>person</i>
              <input type='text' />
              <label>Last Name</label>
            </div>
            <div className='input-field'>
              <i className='material-icons prefix'>edit</i>
              <input type='number' />
              <label>Age</label>
            </div>
            <button className='btn'>ADD.</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Remove
