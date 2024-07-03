import { useQuery } from '@apollo/client'
import { GET_AUTHORS_INO } from '../../graphql/queries'
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

function Author() {
  const {loading , data,errors} =useQuery( GET_AUTHORS_INO);
  
  if (loading) return <h3>Loding...</h3>;

  if (errors) return <h4>Error...</h4>;

  const {authors}=data;
  return (
   <Grid container sx={{boxShadow:"rgb(0,0,0,0.1)0px 4px 12px",borderRadius:4}}>
    {
      authors.map((author,index)=>(
      <React.Fragment key={author.id}>
      <Grid item  xs={12} padding={2}>
        <a
        href={`/authors/${author.slug}`}
        style={{
          display:"flex",
          alignItems:"center",
          textDecoration:"none"
        }}
        >
          <Avatar src={author.avatar.url} sx={{marginLeft:2}} />
          <Typography component="p" variant="p" color="text.primary">
          {author.name}
          </Typography>
        </a>
      </Grid>
      {index !== authors.length -1  && (
        <Grid item xs={12}>
        <Divider variant="middle" />
        </Grid>
      )}
    </React.Fragment>
    ))}
   </Grid>
  )
}

export default Author
