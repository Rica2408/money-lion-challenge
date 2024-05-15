import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react"
import Tooltip from "@mui/material/Tooltip"
import { ContentCardType } from "../pages/api/contentCards"
import React from "react"
import ContentCardActions from "./content-card-actions"

type ContentCardProps = {
    card: ContentCardType
}

const ContentCard = ({ card }: ContentCardProps) => {
    const [isReadMore, setIsReadMore] = useState(true)

    return (
        <Card sx={{ maxWidth: 345, marginBottom: 1, marginTop: 1 }}>
            <CardHeader
                avatar={
                    <Tooltip placement="right-start" title={`${card.textData.author.first} ${card.textData.author.last}`}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {card.textData.author.first[0].toUpperCase()}{card.textData.author.last[0].toUpperCase()}
                        </Avatar>
                    </Tooltip>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={card.textData.title}
                subheader={card.textData.subTitle}
            />
            <CardMedia
                component="img"
                height="194"
                image={card.imageUri}
                alt="post image"
            />
            <CardContent>
                <Typography style={{ wordWrap: "break-word" }}
                    variant="body2" color="text.secondary">
                    {(card.textData.body.length > 190) ? isReadMore ?
                        <>
                            {card.textData.body.slice(0, 190)} <u onClick={() => setIsReadMore(false)} style={{ cursor: "pointer" }}>...read more</u>
                        </> :
                        <>
                            {card.textData.body} <u onClick={() => setIsReadMore(true)} style={{ cursor: "pointer" }}>...read less</u>
                        </>
                        : card.textData.body}
                </Typography>
            </CardContent>
            <ContentCardActions comments={card.comments} />
        </Card>
    )
}

export default ContentCard