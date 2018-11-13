import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import tier1image from '../../assets/images/tier-1-image.jpg'
import Helmet from 'react-helmet';
import axios from 'axios';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsors: []
        };
    }
    componentDidMount() {
        axios.get('./data/sponsors.json')
        .then(res => {
            const data = res.data.sponsors;
            this.setState({ sponsors: data })
        })
    }
    render() {
        return (
            <div>
                <Helmet
                    title="Lawton Under 40"
                />
                <Hidden smDown>
                    <div className="page-transition-top"></div>
                    <div className="page-transition-bottom"></div>
                </Hidden>
                <div className="pageContent">
                    <div className="hero">
                        <div className="overText">
                            <h2>Welcome to Lawton Under 40</h2>
                            <p>Est dolore dolor labore ad nostrud. Duis consectetur labore nisi laborum incididunt cillum ex sunt eiusmod. Nostrud consectetur ad enim dolore ipsum aute adipisicing aliquip magna nostrud nostrud est enim reprehenderit. Consequat consectetur nostrud minim officia enim ex.</p>
                            <p><NavLink to="/about" className="button">About Us</NavLink></p>
                        </div>
                    </div>
                    <div className="tier-1">
                        <div className="redSlash"></div>
                        <div className="wrap">
                            <Grid container spacing={32} alignItems="center">
                                <Grid item xs="12" sm="4" className="text-center">
                                    <LazyLoad height={444} once>
                                        <img src={tier1image} alt="" />
                                    </LazyLoad>
                                </Grid>
                                <Grid item xs="12" sm="8" className="rightContent">
                                    <h2><span>About</span> Lawton Under 40</h2>
                                    <div>
                                        <p>Esse enim id dolore cillum tempor nulla sit cupidatat eiusmod culpa sit Lorem dolore. Duis sit aliqua laborum aute voluptate laboris deserunt qui tempor. Dolore anim culpa ullamco incididunt minim minim labore aliquip adipisicing est culpa. Nisi exercitation voluptate aliqua mollit anim consequat Lorem enim culpa eiusmod consectetur mollit reprehenderit. Aliqua ex enim aliqua sint irure et cillum labore ea.</p>
                                    </div>
                                    <p><NavLink className="button" to="/about">Learn More</NavLink></p>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="tier-2">
                        <h2>How it Works</h2>
                        <Grid container spacing={16} alignItems="center">
                            <Grid item xs="12" md="4" className="step">
                                <div>
                                    <p className="number">01</p>
                                    <h3>Nominations</h3>
                                    <p>Dolor dolor anim veniam reprehenderit id eu proident eiusmod adipisicing in.</p>
                                </div>
                            </Grid>
                            <Grid item xs="12" md="4" className="step">
                                <div>
                                    <p className="number">02</p>
                                    <h3>Board Convenes</h3>
                                    <p>Laborum magna aliquip Lorem irure ipsum cupidatat.</p>
                                </div>
                            </Grid>
                            <Grid item xs="12" md="4" className="step">
                                <div>
                                    <p className="number">03</p>
                                    <h3>Awards Banquet</h3>
                                    <p>Commodo excepteur minim irure laboris voluptate mollit elit fugiat.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="tier-3">
                        <div className="wrap text-center">
                            <h2><span>Submit Your</span> Nominations</h2>
                            <p>Eiusmod deserunt ex anim duis aliquip id ut consectetur do adipisicing nisi. Aliqua aute aute ex aliqua nisi enim. Officia pariatur aliquip et reprehenderit ut in aliqua quis sunt. Culpa nisi ad reprehenderit laborum nisi dolore in laboris amet officia. Sit duis adipisicing non consequat aliqua irure sint cupidatat. Qui fugiat fugiat exercitation ullamco sint veniam labore do officia velit sunt. Non elit adipisicing enim voluptate deserunt ipsum nisi exercitation cillum sit reprehenderit amet cillum sit. Velit exercitation enim in do occaecat esse ex ullamco ad.</p>
                            <p><NavLink className="button" to="/nominations">Submit Your Nomination</NavLink></p>
                        </div>
                    </div>
                    <div className="tier-4">
                        <Grid container spacing={16}>
                            <Grid item xs="12" sm="4" md="2" className="step">
                                <div className="sticky">
                                    <h2><span>Check Out Our</span> Sponsors</h2>
                                    <p><NavLink to="/sponsors" className="button">Become a Sponsor</NavLink></p>
                                </div>
                            </Grid>
                            <Grid item xs="12" sm="8" md="10" className="step">
                                <div>
                                    <Grid container spacing={8} alignItems="center">
                                        {this.state.sponsors.map((sponsor, i) =>  (
                                                <Grid item xs="12" sm="6" md="3" key={i}>
                                                    <img src={sponsor.logo} alt="" />
                                                </Grid>
                                            )
                                        )}
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}