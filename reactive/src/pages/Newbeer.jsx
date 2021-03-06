import React from "react";
import { Header } from "../components/Header";
import Axios from "axios";

export class Newbeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post("https://ironbeerapi.herokuapp.com/beers/new", this.state)
      .then(e => console.log(e))
      .catch(res => console.log(`eeerrrorr ${res}`));
  }

  render() {
    return (
      <div>
        <Header />
        <form className='formulario' onSubmit={e => this.handleSubmit(e)}>
          <label className='labelForm'>
            Name:
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            Tagline:
            <input
              name='tagline'
              type='text'
              value={this.state.tagline}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            description:
            <textarea
              name='description'
              type='textArea'
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            first_brewed:
            <input
              name='first_brewed'
              type='date'
              value={this.state.first_brewed}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            brewed_tips:
            <input
              name='brewers_tips'
              type='text'
              value={this.state.brewed_tips}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            attenuation:
            <input
              name='attenuation_level'
              type='number'
              value={this.state.attenuation}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label className='labelForm'>
            Contributed By:
            <input
              name='contributed_by'
              type='text'
              value={this.state.contributed}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <button className='buttonSubmit' onClick={e => this.handleSubmit(e)}>
            Add Beer
          </button>
        </form>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}
