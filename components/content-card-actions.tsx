import Box from "@mui/material/Box"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react"
import CommentCard from "./commet-card"
import { CommentType } from "../pages/api/contentCards"

type ContentCardActionsProps = {
    comments: CommentType[]
}

const ContentCardActions = ({ comments }: ContentCardActionsProps) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: "red" }} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                {expanded ?
                    <ExpandLessIcon onClick={handleExpandClick} /> :
                    <ExpandMoreIcon onClick={handleExpandClick} />
                }
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>Comments:</Typography>
                    {comments.map((comment, index) => (
                        <CommentCard key={index} comment={comment} />
                    ))}
                </CardContent>
            </Collapse>

        </Box>
    )
}

export default ContentCardActions