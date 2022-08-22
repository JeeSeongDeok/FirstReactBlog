import React, { Component } from 'react';
import { IconButton, Typography, Button, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'

function HomeHeader(props) {
    const { title } = props;
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h8"
                    align="Left"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <IconButton>
                    <TwitterIcon/>
                </IconButton>
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                <Button size="small">Subscribe</Button>
            </Toolbar>
        </React.Fragment>
    )
}
export default HomeHeader