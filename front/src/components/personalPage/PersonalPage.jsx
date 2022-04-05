import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';
import './PersonalPage.css';

export default function PersonalPage() {
  return (
    <>
      <Typography className="ppTitle" variant="h5" gutterBottom component="div">
        Твои предыдущие игры:
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Название игры"
            secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Очки
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  )
}
