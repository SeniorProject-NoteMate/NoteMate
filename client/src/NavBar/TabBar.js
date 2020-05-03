// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#4169E1",
//     color: "white",
    
   
//   },
// });

// export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
    
//   };

//   return (
//     <div>
//     <Paper className={classes.root} >
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="white"
//         centered
//       >
//         <h3> NoteMate</h3>
//         <Tab label="Home" />
//         <Tab label="About" />
//         <Tab label="Sign In" />
//       </Tabs>
//     </Paper>
//     </div>
//   );
// }
