import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class Nominations extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Nominations | Lawton Under 40"
                />
                <Hidden smDown>
                    <div className="page-transition-top"></div>
                    <div className="page-transition-bottom"></div>
                </Hidden>
                <div className="pageContent">
                    <div className="title-container">
                        <h1>Nominations</h1>
                    </div>
                    <div className="innerContent">
                        <div className="wrap">
                            <p>Cupidatat reprehenderit culpa amet voluptate commodo commodo sit esse consectetur culpa nulla. Nisi id aute laborum Lorem reprehenderit tempor. Cillum qui laboris reprehenderit ad labore quis dolor minim. Eiusmod consequat excepteur culpa pariatur. Pariatur elit laboris labore eiusmod.</p>
                            <h2>Nomination Form</h2>
                            <p>Please fill out the form below to complete your nomination request.</p>
                            <form noValidate autoComplete="off" action="/post" method="post">
                                <Grid container spacing={16}>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominator's First and Last Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominator's Email Address"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominator's Phone Number"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominator's Employer"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominee's First Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominee's Last Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominee's Email Address"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12" sm="6">
                                        <TextField
                                            label="Nominee's Employer"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12">
                                        <TextField
                                            multiline
                                            rows="10"
                                            label="Why should your nominee be considered?"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs="12">
                                        <Button
                                            type="submit"
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