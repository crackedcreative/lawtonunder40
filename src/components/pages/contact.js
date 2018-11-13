import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class Contact extends Component {
    render(){
        return (
            <div>
            <Helmet
                title="Contact | Lawton Under 40" 
            />
            <Hidden smDown>
                <div className="page-transition-top"></div>
                <div className="page-transition-bottom"></div>
            </Hidden>
            <div className="pageContent">
                <div className="title-container">
                    <h1>Contact</h1>
                </div>
                <div className="innerContent">
                    <div className="wrap">
                        <p>Cupidatat reprehenderit culpa amet voluptate commodo commodo sit esse consectetur culpa nulla. Nisi id aute laborum Lorem reprehenderit tempor. Cillum qui laboris reprehenderit ad labore quis dolor minim. Eiusmod consequat excepteur culpa pariatur. Pariatur elit laboris labore eiusmod.</p>
                        <form noValidate autoComplete="off">
                            <Grid container spacing={16}>
                                <Grid item xs="12" sm="6">
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs="12" sm="6">
                                    <TextField
                                        label="Email Address"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        multiline
                                        rows="4"
                                        label="Your Message"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <Button
                                    variant="outlined" 
                                    size="large"
                                    color="primary"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
           </div>
        )
    }
}