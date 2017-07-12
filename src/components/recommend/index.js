import React from 'react';
import { observer, inject} from 'mobx-react';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import recommendStyles from 'styles/recommend';

@withStyles(recommendStyles)
@inject('song')
@inject('recommend')
@observer
class Recommend extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { recommend } = this.props;
    recommend.fetchList();
  }
  handleClick(id) {
    const { song } = this.props;
    song.fetchSong(id);
  }
  render() {
    const { recommend, classes } = this.props;
    return (
      <div className={classes.root}>
        {
          recommend.list.map((item, idx) => (
            <Card key={idx} className={classes.item} onClick={() => { this.handleClick(item.id)}}>
              <CardMedia>
                <img src={item.picUrl} alt="Contemplative Reptile" />
              </CardMedia>
              <CardContent className={classes.content}>
                <Typography type="caption" >
                  { item.name }
                </Typography>
              </CardContent>
            </Card>
          ))
        }

      </div>
    );
  }
}


export default Recommend;
