import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#4169E1",
//     color: "yellow",
   
//   },
  
// });

export default function Home() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div>
       <div style={{color : "#1235a4"}}>
            <AppBar position ="fixed" >
                <ToolBar >
                    <Typography variant  = "title" >
                             <a href= "/home" style={{color: 'white'}}> NOTE MATE </a>
                    </Typography>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button class="btn link"><a href="/home" >Home</a></button>
                    <button class="btn link"><a href="/profile" >Profile</a></button>
                    <button class="btn link"><a href="/about" >About</a></button>
                </ToolBar>
               
            </AppBar>
        </div>
   
        <div className = "homepage">
             <div className= "home_butt">
                  <button class="btn info"><a href="/signin" >Sign In</a></button>
                  <button class="btn info"><a href="/signup" >Sign Up</a></button>
             </div>
        </div>
        <div className="footer-copyright text-center py-3" style={{backgroundColor: "#1235a4", height:"60px", color:"white"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: NoteMate.
        </MDBContainer>
      </div>
    </div>

  );
}
