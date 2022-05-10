// import React, { useState, useEffect } from 'react';
// import { getMap } from '../api';
import { Component } from "react";
import '../styles/Catalogs.css'
import Footer from "./Footer/Footer";
import catalog1 from '../assets/Hoards/Hoards1&2.pdf'
import catalog2 from '../assets/Hoards/Hoards3&4.pdf'
import catalog3 from '../assets/Hoards/Hoard5.pdf'
import catalog4 from '../assets/Hoards/Hoards6,7&10.pdf'
import catalog5 from '../assets/Hoards/Hoards8&9.pdf'

class Catalogs extends Component {
    // const [ title, setTitle ] = useState('');

    // useEffect(() => {
    //     getMap()
    //         .then(response => {
    //             const data = response.data;
    //             setTitle(data.page);
    //         })
    // }, [])

    constructor(props){
      super(props)

      // Set initial state
      this.state = {pdf : catalog1, b1 : 'hoards_t_c', b2 : 'hoards', b3 : 'hoards', b4 : 'hoards', b5 : 'hoards_b'}

      // Binding this keyword
      this.handleClick1 = this.handleClick1.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
      this.handleClick3 = this.handleClick3.bind(this)
      this.handleClick4 = this.handleClick4.bind(this)
      this.handleClick5 = this.handleClick5.bind(this)
    }

    handleClick1(){

      // Changing state
      this.setState({ pdf: catalog1 })

      this.setState({b1 : 'hoards_t_c'})
      this.setState({b2 : 'hoards'})
      this.setState({b3 : 'hoards'})
      this.setState({b4 : 'hoards'})
      this.setState({b5 : 'hoards_b'})
    }

    handleClick2(){

      // Changing state
      this.setState({ pdf: catalog2 })

      this.setState({b1 : 'hoards_t'})
      this.setState({b2 : 'hoards_c'})
      this.setState({b3 : 'hoards'})
      this.setState({b4 : 'hoards'})
      this.setState({b5 : 'hoards_b'})
    }

    handleClick3(){

      // Changing state
      this.setState({ pdf: catalog3 })

      this.setState({b1 : 'hoards_t'})
      this.setState({b2 : 'hoards'})
      this.setState({b3 : 'hoards_c'})
      this.setState({b4 : 'hoards'})
      this.setState({b5 : 'hoards_b'})
    }

    handleClick4(){

      // Changing state
      this.setState({ pdf: catalog4 })
      this.setState({b1 : 'hoards_t'})
      this.setState({b2 : 'hoards'})
      this.setState({b3 : 'hoards'})
      this.setState({b4 : 'hoards_c'})
      this.setState({b5 : 'hoards_b'})
    }

    handleClick5(){

      // Changing state
      this.setState({ pdf: catalog5 })

      this.setState({b1 : 'hoards_t'})
      this.setState({b2 : 'hoards'})
      this.setState({b3 : 'hoards'})
      this.setState({b4 : 'hoards'})
      this.setState({b5 : 'hoards_b_c'})
    }

    render(){
    return (
      <div>
      <div className='catalogpage'>

        <div>

          <p className='select'>Select a Catalog</p>

        <nav className='buttons'>
          <button className={this.state.b1} onClick={this.handleClick1}>
            Hoards 1 & 2
          </button>

          <nav className='separator'></nav>

          <button className={this.state.b2} onClick={this.handleClick2}>
            Hoards 3 & 4
          </button>

          <nav className='separator'></nav>

          <button className={this.state.b3} onClick={this.handleClick3}>
            Hoard 5
          </button>

          <nav className='separator'></nav>

          <button className={this.state.b4} onClick={this.handleClick4}>
            Hoards 6, 7 & 10
          </button>

          <nav className='separator'></nav>

          <button className={this.state.b5} onClick={this.handleClick5}>
            Hoards 8 & 9
          </button>

        </nav>

        </div>

        <div className='viewer'>
        <iframe className='pdf' src={this.state.pdf} width={925} height={743} title="myFrame"></iframe>
        </div>


  </div>
  <Footer/>
  </div>
    )
  }
}

export default Catalogs;