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
import AddCircle from '@mui/icons-material/AddCircleOutlined';

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
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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


  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];




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

  const [color, setColor] = React.useState(["#fff", "#000", "#000", "#000"]);
  let arr = [];
  const [backcolor, setBackColor] = React.useState(["#000", "#f2f2f2", "#f2f2f2", "#f2f2f2"]);
  let arrB = [];
  function mudaCor(id) {
    for (let i = 0; i < 4; i++) {
      if (i === id) {
        arr[i] = "#fff";
        arrB[i] = "#000"
      }
      else {
        arr[i] = "#000"
        arrB[i] = "#f2f2f2";
      }

    }
    setColor(arr);
    setBackColor(arrB)
  }
const [darkMode, setDarkMode] = React.useState(false);
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    sx={darkMode?{backgroundColor:"#212121", color: "white"}: {backgroundColor:"#fff", color: "black"}}
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
      <MenuItem onClick={()=>{handleMenuClose();setDarkMode(!darkMode)}}>Dark Mode</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <>
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
      <Button
                startIcon={<AccountCircleOutlinedIcon />}
                variant='outlined'
                sx={{
                  color: '#0b60d4',
                  border: 'solid 1px #2673d9',
                }}
              >
                Fazer Login
              </Button>
    </Menu>
  </>
  );

  // Styles

  let style1 = "width: '13%', backgroundColor: '#212121', color: 'white'"
  
  return (
    <>
      <Box sx={{
        flexGrow: 1, [`& .MuiToolbar-root`]: darkMode?{ backgroundColor: '#212121', boxShadow: '0' }: {backgroundColor: '#fff'}, [`& .MuiBox-root`]: { boxShadow: 'none' },
        [`& .ForwardRef-root-1`]: { marginLeft: '25%', marginRight: '25%', width: '100%', border: 'solid 0.5px #e7e7e7', boxShadow: '0', height: '30%', borderRadius: '0' },
        [`& .MuiPaper-rounded`]: darkMode ?{ backgroundColor: '#121212', boxShadow: '0', color: "#FFF", border: "solid 1px #303030" }: {backgroundColor: '#fff', boxShadow: '0'},
        [`& .css-hyum1k-MuiToolbar-root`]: { boxShadow: '0' },
        [`& .MuiBox-root`]: { boxShadow: '0' },
        [`& .MuiInput-input`]:darkMode ?{ backgroundColor: '#121212', boxShadow: '0', color: "#FFF"}: {backgroundColor: '#fff', boxShadow: '0'},
        [`& .MuiSvgIcon-root`]:darkMode ?{ color: "#FFF"}:{color: "#343434"},
      }}>
        <AppBar position="static" sx={darkMode?{ boxShadow: 'none', backgroundColor:"#212121", color: "white" } : {boxShadow: 'none', backgroundColor:"#white", color: "black" }}>
          <Toolbar sx={{ backgroundColor:"#212121", color: "white"}}>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 2, color: 'black' }}
            >
              <MenuIcon sx={darkMode?{color:"white"}:{color:"black"}}/>
            </IconButton>
            <img src=
            {darkMode ? '/images/branco.png' 
            :'/images/preto.png'}
            
             height={27} />
            <SearchBar placeholder="Pesquisar" sx={darkMode?{backgroundColor:"black", color:"white"}:{backgroundColor:"white"}}/>
            <Box sx={{ flexGrow: 1, backgroundColor:"#000", color: "white" }} />
            <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <MoreVertIcon sx={darkMode?{ color: 'white' }:{color:"black"}} />
              </IconButton>
            </Box>
            <Button 
                startIcon={<AccountCircleOutlinedIcon />}
                variant='outlined'
                sx={{
                  width: '500px',
                  textAlign: 'center',
                  marginLeft: '1%',
                  padding: '10px 10px',
                  color: '#0b60d4',
                  border: 'solid 1px #2673d9',
                }}
              >
                Fazer Login
              </Button>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box sx={darkMode?{ backgroundColor:"#212121", color: "white", width: '100%', flexDirection: 'row', display: 'flex'} : {backgoundColor:"#fff", color: "black", width: '100%', flexDirection: 'row', display: 'flex'}}>
        <Box sx={darkMode ? {[`& MuiSvgIcon-root`]:{ color: "#FFF"}} : {[`& MuiSvgIcon-root`]:{ color: "#000"}}} className={style1}>
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
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>{<Whatshot />}</ListItemIcon>
              <ListItemText sx={{
                fontSize: 12
              }} primary={'Em alta'} />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>
              <ListItemText sx={{
                fontSize: 12
              }} primary={'Inscrições'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
              <ListItemText sx={{
                fontSize: 12
              }}
                primary={'Biblioteca'} />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>{<History />}</ListItemIcon>
              <ListItemText sx={{
                fontSize: 12
              }} primary={'Histórico'} />
            </ListItem>
          </List>
          <Divider />
          
          <Box p={2} sx={darkMode?{backgroundColor:"#212121", color: "white"}:{backgroundColor:"#fff", color: "black"}}>
            <Typography variant='body2'>
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                startIcon={<AccountCircleOutlinedIcon />}
                variant='outlined'
                sx={{
                  color: '#0b60d4',
                  border: 'solid 1px #2673d9',
                }}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            sx={darkMode?{backgroundColor: '#000', color: '#fff', [`& .MuiListSubheader-root`]:{
              color: "#FFF",
            }}:{backgroundColor: '#fff', color: '#black', [`& .MuiListSubheader-root`]:{
              color: "black"}}}
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                color={"#fff"}
                sx={darkMode?{ textTransform: 'uppercase', [`& .MuiListSubheader-root`]:{
                  color: "#FFF",
                }}: {color:"black"} }
              >
                EXPLORAR
              </ListSubheader>
            }
          >
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                  <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Música'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Esportes'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Jogos'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Filmes'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Notícias'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Ao vivo'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 12
                }}
                primary={'Destaques'}
              />
            </ListItem>
            <ListItem button sx={darkMode? {color: "#FFF", paddingTop: 4, paddingBottom: 4} : {color: "black", paddingTop: 4, paddingBottom: 4}}>
              <ListItemIcon>
                <AddCircle sx={darkMode? {color: "#FFF"} : {color: "black"}} />
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
        <Box sx={{ height: '100%', maxWidth: '87%', width: '87%', backgroundColor: '#f9f9f9', borderTop: 'solid 1px #e7e7e7', flexDirection: 'row' }}>
          <Box sx={{ height: '3.5rem', backgroundColor: '#FFF', paddingLeft: '20px' }}>
            <Button variant="outlined" onClick={() => mudaCor(0)}
              sx={{
                color: color[0],
                backgroundColor: backcolor[0],
                borderRadius: '30px',
                border: 'solid 1px #dcdcdc',
                fontSize: '14px',
                textTransform: 'capitalize',
                fontFamily: 'Arial',
                paddingBottom: '4px',
                paddingTop: '4px',
                top: '50%',
                fontWeight: 'bold',
                transform: 'translateY(-50%)',
                '&:hover': {
                  ...(backcolor[0] === "#f2f2f2" && {
                    backgroundColor: "#e5e5e5",
                    border: "solid 1px #dcdcdc",
                  }),
                  ...(backcolor[0] === "#000" && {
                    backgroundColor: "#000",
                    border: "solid 1px #dcdcdc",
                  })
                }
              }}>Tudo</Button>
            <Button variant="outlined" onClick={() => mudaCor(1)}
              sx={{
                color: color[1],
                backgroundColor: backcolor[1],
                border: 'solid 1px #dcdcdc',
                borderRadius: '30px',
                fontSize: '14px',
                textTransform: 'capitalize',
                fontFamily: 'Arial',
                paddingBottom: '4px',
                paddingTop: '4px',
                top: '50%',
                fontWeight: 'bold',
                transform: 'translateY(-50%)',
                marginLeft: '1%',
                '&:hover': {
                  ...(backcolor[1] === "#f2f2f2" && {
                    backgroundColor: "#e5e5e5",
                    border: "solid 1px #dcdcdc",
                  }),
                  ...(backcolor[1] === "#000" && {
                    backgroundColor: "#000",
                    border: "solid 1px #dcdcdc",
                  })
                }
              }}>Ao vivo</Button>
            <Button variant="outlined" onClick={() => mudaCor(2)}
              sx={{

                color: color[2],
                backgroundColor: backcolor[2],
                border: 'solid 1px #dcdcdc',
                borderRadius: '30px',
                fontSize: '14px',
                textTransform: 'capitalize',
                fontFamily: 'Arial',
                paddingBottom: '4px',
                paddingTop: '4px',
                top: '50%',
                fontWeight: 'bold',
                transform: 'translateY(-50%)',
                marginLeft: '1%',
                '&:hover': {
                  ...(backcolor[2] === "#f2f2f2" && {
                    backgroundColor: "#e5e5e5",
                    border: "solid 1px #dcdcdc",
                  }),
                  ...(backcolor[2] === "#000" && {
                    backgroundColor: "#000",
                    border: "solid 1px #dcdcdc",
                  }),
                }
              }}>Mixes</Button>
            <Button variant="outlined" onClick={() => mudaCor(3)}
              sx={{
                color: color[3],
                marginLeft: '1%',
                backgroundColor: backcolor[3],
                border: 'solid 1px #dcdcdc',
                borderRadius: '30px',
                fontSize: '14px',
                textTransform: 'capitalize',
                fontFamily: 'Arial',
                paddingBottom: '4px',
                paddingTop: '4px',
                top: '50%',
                fontWeight: 'bold',
                transform: 'translateY(-50%)',
                '&:hover': {
                  ...(backcolor[3] === "#f2f2f2" && {
                    backgroundColor: "#e5e5e5",
                    border: "solid 1px #dcdcdc",
                  }),
                  ...(backcolor[3] === "#000" && {
                    backgroundColor: "#000",
                    border: "solid 1px #dcdcdc",
                  })
                }
              }}>Jogos</Button>
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

