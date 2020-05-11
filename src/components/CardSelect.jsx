import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


class CardSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOne: '',
            idTwo: ''
        };
    }

    onClickOne = () => {
        alert('cacaboudin')
    }

    onClickTwo = () => {
        alert('cacaboudin2')
        // this.setState({
        //     idTwo: 'truc',
        // });
    }

    render() {
        const { nameCharacter, urlImage } = this.props;
        console.log("Cards props: ", nameCharacter, urlImage);
        return (
            <Grid container direction="row">
                <CardActionArea>
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" variant="h4">
                            {nameCharacter}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <img src={urlImage} alt="" className="avatarBio" />
                        </Grid>
                    </Grid>
                </CardActionArea>

            </Grid>

        )
    }
}

export default CardSelect;

