import {React,useState }from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChairIcon from '@mui/icons-material/Chair';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
        })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        }));



export default function Listing(){
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {setExpanded(!expanded)};

    return <div>
        <div  className="listing">
                <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="listing">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Apeertment name/address"
                    subheader="Listed since: September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image=""
                    alt="image"
                    className="card-media"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive loacation is in a perfect part of the city and a fun area for outdoor activities together with  guests. 
                    
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        ...
                    </Typography>
                    
                    <span><ChairIcon/>furnished</span>
                    <span><MeetingRoomIcon/>2 Bedrooms</span>
                    <h3>Construction</h3>
                    <li>Property type: Apartment</li> <hr/>
                    <li>Type of construction: Existing building</li><hr/>
                    <p>More...</p>
                    <button>Action</button>
                    </CardContent>
                </Collapse>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="listing">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Apeertment name/address"
                    subheader="Listed since: September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image=""
                    alt="image"
                    className="card-media"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive loacation is in a perfect part of the city and a fun area for outdoor activities together with  guests. 
                    
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        ...
                    </Typography>
                    
                    <span><ChairIcon/>furnished</span>
                    <span><MeetingRoomIcon/>2 Bedrooms</span>
                    <h3>Construction</h3>
                    <li>Property type: Apartment</li> <hr/>
                    <li>Type of construction: Existing building</li><hr/>
                    <p>More...</p>
                    <button type="button">Action</button>
                    </CardContent>
                </Collapse>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="listing">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Apeertment name/address"
                    subheader="Listed since: September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image=""
                    alt="image"
                    className="card-media"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive loacation is in a perfect part of the city and a fun area for outdoor activities together with  guests. 
                    
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        ...
                    </Typography>
                    
                    <span><ChairIcon/>furnished</span>
                    <span><MeetingRoomIcon/>2 Bedrooms</span>
                    <h3>Construction</h3>
                    <li>Property type: Apartment</li> <hr/>
                    <li>Type of construction: Existing building</li><hr/>
                    <p>More...</p>
                    <button>Action</button>
                    </CardContent>
                </Collapse>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="listing">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Apeertment name/address"
                    subheader="Listed since: September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image=""
                    alt="image"
                    className="card-media"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive loacation is in a perfect part of the city and a fun area for outdoor activities together with  guests. 
                    
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        ...
                    </Typography>
                    
                    <span><ChairIcon/>furnished</span>
                    <span><MeetingRoomIcon/>2 Bedrooms</span>
                    <h3>Construction</h3>
                    <li>Property type: Apartment</li> <hr/>
                    <li>Type of construction: Existing building</li><hr/>
                    <p>More...</p>
                    <button>Action</button>
                    </CardContent>
                </Collapse>
                </Card>
                <span >
                    <ArrowForwardIosIcon style={{fontSize:"60px",position:"absolute"}}/>
                </span>
            </div>
                    <section>
                        <div>
                            <h3>Renting out a property</h3>
                            <p className="section-p">Rent out your property quickly and easily through a real estate agent with Pararius.nl</p>
                            <button className="btn">Rent out your home</button>
                        </div>
                        <div>
                            <h3>Find a broker</h3>
                            <p className="section-p">View the most complete overview of professional offices and find a real estate agent near you</p>
                            <button className="btn">To the overview</button>
                        </div>
                        <div>
                            <h3>New construction</h3>
                            <p className="section-p">View an up-to-date overview of unique new construction projects - immediately available or under construction</p>
                            <button className="btn">Discover new construction</button>
                        </div>
                    </section>
                    <hr/>
    
            </div>
}