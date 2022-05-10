// import React, { useState, useEffect } from 'react';
// import { getMap } from '../api';
import { Component } from "react";
import '../styles/Map.css'

class Map extends Component {
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
      this.state = {pdf : 'https://www.zeemaps.com/pub?group=4382570&legend=1', m1 : 'map1_c', m2 : 'map2', width: 1200,
                    b1: 'mint_t_c', b2: 'mint', b3: 'mint', b4: 'mint', b5: 'mint', b6: 'mint', b7: 'mint', b8: 'mint_b',
                    display: 'buttons_alt', s1: 'select_alt'}

      // Binding this keyword
      this.handleClick1 = this.handleClick1.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
      this.handleClick3 = this.handleClick3.bind(this)
      this.handleClick4 = this.handleClick4.bind(this)
      this.handleClick5 = this.handleClick5.bind(this)
      this.handleClick6 = this.handleClick6.bind(this)
      this.handleClick7 = this.handleClick7.bind(this)
      this.handleClick8 = this.handleClick8.bind(this)
      this.handleClick9 = this.handleClick9.bind(this)
      this.handleClick10 = this.handleClick10.bind(this)
    }

    handleClick1(){

      // Changing state
      this.setState({ pdf : 'https://www.zeemaps.com/pub?group=4382570&legend=1' })

      this.setState({m1 : 'map1_c'})
      this.setState({m2 : 'map2'})
      this.setState({width : 1200})
      this.setState({display: 'buttons_alt'})
      this.setState({s1: 'select_alt'})
    }

    handleClick2(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394870&legend=1' })

      this.setState({m1 : 'map1'})
      this.setState({m2 : 'map2_c'})
      this.setState({width : 960})
      this.setState({display: 'buttons'})
      this.setState({s1: 'select'})

      this.setState({b1 : 'mint_t_c'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick3(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394870&legend=1' })

      this.setState({b1 : 'mint_t_c'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick4(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394874&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint_c'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick5(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394879&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint_c'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick6(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394880&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint_c'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick7(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394875&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint_c'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick8(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394878&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint_c'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick9(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394881&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint_c'})
      this.setState({b8 : 'mint_b'})
    }

    handleClick10(){

      // Changing state
      this.setState({ pdf: 'https://www.zeemaps.com/pub?group=4394882&legend=1' })

      this.setState({b1 : 'mint_t'})
      this.setState({b2 : 'mint'})
      this.setState({b3 : 'mint'})
      this.setState({b4 : 'mint'})
      this.setState({b5 : 'mint'})
      this.setState({b6 : 'mint'})
      this.setState({b7 : 'mint'})
      this.setState({b8 : 'mint_b_c'})
    }

    render(){
      return (
        <div className="mappage">
            <nav className='options'>
                <button className={this.state.m1} onClick={this.handleClick1}>
                    Dura-Europos Coin Map
                </button>

                <nav className='separator1'></nav>

                <button className={this.state.m2} onClick={this.handleClick2}>
                    Mint Maps
                </button>

            </nav>

            <div className='map_options'>

                <div>

                <p className={this.state.s1}>Select a Hoard</p>

                <nav className={this.state.display}>
                    <button className={this.state.b1} onClick={this.handleClick3}>
                        Hoard 1
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b2} onClick={this.handleClick4}>
                        Hoard 2
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b3} onClick={this.handleClick5}>
                        Hoards 3 & 4
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b4} onClick={this.handleClick6}>
                    Hoard 5
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b5} onClick={this.handleClick7}>
                        Hoard 6
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b6} onClick={this.handleClick8}>
                        Hoard 7
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b7} onClick={this.handleClick9}>
                        Hoards 8 & 9
                    </button>

                    <nav className='separator'></nav>

                    <button className={this.state.b8} onClick={this.handleClick10}>
                        Hoard 10
                    </button>



                </nav>

                </div>

            <div className='view'>
                <iframe className='pdf' src={this.state.pdf} width={this.state.width} height={796} title="myFrame"></iframe>
            </div>
            </div>
        </div>
    )
  }
}

export default Map;