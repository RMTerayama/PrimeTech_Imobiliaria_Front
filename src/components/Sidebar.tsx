import React, { useState } from "react";
import { 
  Drawer, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Toolbar, CssBaseline, 
  Box, Avatar, Typography, IconButton, AppBar, Divider, Menu, MenuItem 
} from "@mui/material";
import { 
  Menu as MenuIcon, HomeRounded, AddBusinessRounded, 
  BarChartRounded, DescriptionRounded, AttachMoneyRounded, 
  ExpandLess, ExpandMore 
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 260;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Abre o menu no local do clique
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Fecha o menu
  };

  const drawer = (
    <Box 
      sx={{ 
        width: drawerWidth, 
        backgroundColor: "#774B34", 
        height: "100vh", 
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingY: 2
      }}
    >
      {/* Título */}
      <Box sx={{ paddingX: 3, paddingBottom: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Imobiliária
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", marginBottom: 2 }} />

      {/* Lista de Navegação */}
      <List sx={{ flexGrow: 1, paddingX: 1 }}>
        {[ 
          { text: "Início", icon: <HomeRounded />, path: "/" },
          { text: "Adicionar Imóvel", icon: <AddBusinessRounded />, path: "/adicionar-imovel" },
          { text: "Relatório", icon: <BarChartRounded />, path: "/relatorio" },
          { text: "Contratos", icon: <DescriptionRounded />, path: "/contratos" },
          { text: "Financeiro", icon: <AttachMoneyRounded />, path: "/financeiro" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              sx={{ 
                borderRadius: 2, 
                marginX: 1, 
                color: "#FFF",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" }
              }}
            >
              <ListItemIcon sx={{ color: "#FFF", minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", marginBottom: 1 }} />

      {/* Menu suspenso do usuário */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ marginTop: 2 }}
      >
        <MenuItem onClick={handleMenuClose}>Editar Usuário</MenuItem>
        <MenuItem onClick={handleMenuClose}>Ajustes</MenuItem>
      </Menu>

      {/* Usuário */}
      <Box 
        sx={{ 
          p: 2, 
          backgroundColor: "#F1DFBE", 
          color: "#000", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          borderRadius: 2,
          marginX: 1,
          cursor: "pointer",
        }} 
        onClick={handleUserMenuToggle}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#774B34", mr: 1 }}>U</Avatar>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>Usuário</Typography>
        </Box>
        <IconButton size="small">
        <IconButton size="small">
          {anchorEl ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Navbar responsivo */}
      <AppBar position="fixed" sx={{ backgroundColor: "#774B34", display: { md: "none" } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>Imobiliária</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
