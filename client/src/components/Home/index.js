import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './style.css';

const Home = () => (
    <Card style={styles.card}>
        <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={false}
            showExpandableButton={false}
        />
        <CardText expandable={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Read More" />
        </CardActions>
    </Card>
);

const styles = {
    card: {
        maxWidth: 768,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 80
    }
};

export default Home;