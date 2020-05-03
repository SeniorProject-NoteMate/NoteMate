import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function NavBar (){
    return(
        <div>
            <AppBar position ="fixed">
                <ToolBar>
                    <Typography variant  = "title" color = "inherit">
                             <a href= "/home" style={{color: 'white'}}> NOTE MATE </a>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
