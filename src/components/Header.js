import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  makeStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import MicIcon from '@material-ui/icons/Mic';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchBar from "material-ui-search-bar";
import styled from 'styled-components'


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
            <VideoCallIcon sx={{color: 'black'}}/>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large">
            <NotificationsNoneIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{color: 'black'}} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1, [`& .MuiToolbar-root`]:{ backgroundColor: '#FFF', boxShadow: '0'},[`& .MuiBox-root`]:{ boxShadow: 'none'},
     [`& .ForwardRef-root-1`]:{ marginLeft: '25%', marginRight: '25%', width: '100%', border: 'solid 0.5px #e7e7e7', boxShadow: '0', height: '30%', borderRadius: '0' },
     [`& .MuiPaper-rounded`]:{ boxShadow: '0' },
     [`& .css-hyum1k-MuiToolbar-root`]:{ boxShadow: '0' },
     [`& .MuiBox-root`]:{ boxShadow: '0' }}}>
       
      <AppBar position="static" sx={{ boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <img src='/images/preto.png' height={27}/>
            <SearchBar placeholder="Pesquisar"/>         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
                <VideoCallIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton size="large" color="inherit">
                <NotificationsNoneIcon sx={{color: 'black'}} />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{color: 'black'}}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon sx={{color: 'black'}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <Box sx={{width: '100%', flexDirection: 'row', display: 'flex'}}>
    <Box sx={{ width: '13%'}}>
      <List>
        <ListItem button 
        sx={{
          paddingTop: 2,
          paddingBottom: 2
        }}
        >
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText sx={{
            fontSize: 12
          }}
            primary={'Início'} />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>{<Whatshot />}</ListItemIcon>
          <ListItemText sx={{
            fontSize: 12
          }} primary={'Em alta'} />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4}}>
          <ListItemIcon>{<Subscriptions />}</ListItemIcon>
          <ListItemText sx={{
            fontSize: 12
          }} primary={'Inscrições'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
          <ListItemText sx={{
            fontSize: 12
          }}
            primary={'Biblioteca'} />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>{<History />}</ListItemIcon>
          <ListItemText sx={{
            fontSize: 12
          }} primary={'Histórico'} />
        </ListItem>
      </List>
      <Divider />
      <Box p={2}>
        <Typography variant='body2'>
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='secondary'
          >
            Fazer Login
          </Button>
        </Box>
      </Box>
      <Divider />
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader
            component='div'
            id='nested-list-subheader'
            sx={{textTransform: 'uppercase'}}
          >
            O Melhor do youtube
          </ListSubheader>
        }
      >
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Música'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Esportes'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Jogos'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Filmes'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Notícias'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Ao vivo'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Destaques'}
          />
        </ListItem>
        <ListItem button sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            sx={{
              fontSize: 12
            }}
            primary={'Videos 360'}
          />
        </ListItem>
      </List>
    </Box>
    <Box sx={{ height:'100%', maxWidth: '85%', width:'85%', backgroundColor: '#f9f9f9', borderTop: 'solid 1px #e7e7e7', flexDirection: 'row'}}>
      <Box sx={{ height:'3.5rem', backgroundColor: '#FFF'}}>
        <Button variant="contained" 
          sx={{
            color:'#FFF',
            backgroundColor: '#000',
            borderRadius: '30px',
            fontSize: '14px',
            textTransform: 'capitalize',
            fontFamily: 'Arial',
            paddingBottom: '4px',
            paddingTop:'4px',
            top: '50%',
            transform: 'translateY(-50%)', 
          }}>Tudo</Button>
      </Box>
      <Box sx={{ borderTop: 'solid 1px #e7e7e7' }}>
        <p>a</p>
      </Box>
    </Box>
    </Box>
    <Toolbar />
    </>
  );
}

