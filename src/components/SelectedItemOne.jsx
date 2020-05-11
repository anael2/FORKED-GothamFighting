import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


class SelectedItemOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, image } = this.props;
        console.log("Cards props: ", name, image);
        return (
            <Grid container direction="row" >
                <CardActionArea>
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" variant="h4">
                            {name}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <img src={image} alt={name} className="selectImage selectImage-One" />
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Grid>

        )
    }
}

export default SelectedItemOne;