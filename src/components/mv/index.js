import React from 'react';
import { observer, inject} from 'mobx-react';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import mvStyles from 'styles/mv';

@withStyles(mvStyles)
@inject('mv')
@observer
class Song extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { mv } = this.props;
    mv.fetchList();
  }
  render() {
    const { mv, classes } = this.props;
    return (
      <div>
        {
          mv.list.map((item, idx) => (
            <Card key={idx} className={classes.item}>
              <CardMedia>
                <img src={item.cover} alt="Contemplative Reptile" />
              </CardMedia>
              <CardContent>
                <Typography type="headline" component="h2">
                  { item.name }
                </Typography>
                <Typography component="p">
                    { item.briefDesc }
                </Typography>
              </CardContent>
              <CardActions>
                <Button dense color="primary">
                  Share
                </Button>
                <Button dense color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))
        }

      </div>
    );
  }
}


export default Song;
