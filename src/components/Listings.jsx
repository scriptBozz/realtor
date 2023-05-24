
import {React,useState } from "react";
import TextField from '@mui/material/TextField';
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
import { yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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


export default function Listings({result}){
     const [expanded, setExpanded] = useState(false);
     const [search, setSearch] = useState("");
     function onChangeHandler(event){setSearch(event.target.value)};
     const results = result.filter((house)=>house.location.toLowerCase().includes(search.toLowerCase()))
     const handleExpandClick = () => {setExpanded(!expanded)};
    

    return  <div>
        <div className="listing-search-div">
         <TextField
                id="standard-helperText"
                label="Location"
                defaultValue=""
                helperText="Search by City/street/district"
                variant="standard"
                color="warning"
                focused="true"
                onChange={onChangeHandler}
            />
            <p>Total listings: {search}: {results.length}</p>
            </div>
        <div className="listings-div">
        {results.map((house) => { return  <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: yellow[500] }} aria-label="listing">
                        {house.title.charAt(0) }
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={house.title}
                    subheader={"Location: "+ house.location}
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
                    {house.description}
                    
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
                    
                    
                    </CardContent>
                </Collapse>
                </Card>})}
               
        
          </div>
           <hr/>
    </div>
}