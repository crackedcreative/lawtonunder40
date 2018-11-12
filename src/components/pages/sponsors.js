import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

export default class Sponsors extends Component {
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
    render(){
        return (
            <div>
            <Helmet
                title="Sponsors | Lawton Under 40" 
            />
            <div className="page-transition-left"></div>
            <div className="page-transition-right"></div>
            <div className="pageContent">
                <div className="title-container">
                    <h1>Sponsors</h1>
                </div>
                <div className="innerContent">
                    <div className="wrap">
                        <p>Cupidatat reprehenderit culpa amet voluptate commodo commodo sit esse consectetur culpa nulla. Nisi id aute laborum Lorem reprehenderit tempor. Cillum qui laboris reprehenderit ad labore quis dolor minim. Eiusmod consequat excepteur culpa pariatur. Pariatur elit laboris labore eiusmod.</p>
                        <Grid container spacing={16} alignItems="center" justify="center">
                            {this.state.sponsors.map((sponsor, i) => (
                                <Grid item md="3" key={i}>
                                    <LazyLoad height={150} once>
                                        <img src={sponsor.logo} alt="" />
                                    </LazyLoad>
                                </Grid>
                                )
                            )}
                        </Grid>
                    </div>
                </div>
            </div>
           </div>
        )
    }
}