import React, { Component } from 'react';
import Navigation from './nav';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    state = {
        isTop: true,
      };
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }
    render(){
        return(
            <header className={this.state.isTop ? '' : 'fixed'}>
                <Grid container spacing={16} alignItems="center">
                    <Grid item md="4">
                        <p><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></p>
                    </Grid>
                    <Grid item md="8">
                        <Navigation/>
                    </Grid>
                </Grid>
            </header>
        )
    }
}