import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { CommentType } from "../pages/api/contentCards"

import IconButton from "@mui/material/IconButton"
import FavoriteIcon from '@mui/icons-material/Favorite'
import Tooltip from "@mui/material/Tooltip"
import React from "react"

type CommentCardProps = {
    comment: CommentType
}

const CommentCard = ({ comment }: CommentCardProps) => {
    return (
        <Box>
            <Stack flexDirection="row" alignItems="center">
                <Tooltip title={comment.author}>
                    <Avatar sizes="10px" alt="avatar profile" src={comment.profilePic} sx={{ marginRight: "10px", width: 24, height: 24 }} />
                </Tooltip>
                <Typography fontSize="13px">
                {comment.text}
            </Typography>
            </Stack>
            <Typography fontSize="10px" textAlign="right">
                <IconButton>
                    <FavoriteIcon sx={{height: "15px", color: "red"}} />
                </IconButton>
                {comment.likes}
            </Typography>
        </Box>
    )
}

export default CommentCard