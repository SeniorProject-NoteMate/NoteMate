
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Course from './Course.js';
import TextField from '@material-ui/core/TextField';


export default function List(){
        return (
         
        <div className= "gridlist" >
        
        <Grid container spacing={10} style = {{margin:45}}>
            
        <Grid container item xs={5} sm ={3} spacing={6}>
            <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
            <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        <Grid container item xs={5} sm={3} spacing={6}>
             <Course />
        </Grid>
        </Grid>
        </div>
    );
}