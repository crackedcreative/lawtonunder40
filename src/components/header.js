import React, { Component } from 'react';
import Navigation from './nav';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

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
    render() {
        return (
            <header className={this.state.isTop ? '' : 'fixed'}>
                <Grid container spacing={16} alignItems="center">
                    <Grid item xs="8" md="4">
                        <p><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></p>
                    </Grid>
                    <Grid item xs="4" md="8">
                        <Hidden smDown>
                            <Navigation />
                        </Hidden>
                        <Hidden mdUp>
                            Test
                    </Hidden>
                    </Grid>
                </Grid>
            </header>
        )
    }
}