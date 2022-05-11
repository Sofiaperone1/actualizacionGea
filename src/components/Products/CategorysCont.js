import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 
import '../../views/Products/Products.css'

const CategorysCont = () => {
    
const drawerWidth = 240;
  return (
    <div className='categorysCont'>
        
        <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    
    <Box sx={{ overflow: 'auto' }}>
    <h2> Buscar por categoria </h2>
      <List>
        {['Sahumerios', 'Recipientes', 'Sales', 'Velas' ].map((text, index) => (
          <ListItem button key={text}>
        
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
    </Drawer>
    
    </div>
  )
}

export default CategorysCont