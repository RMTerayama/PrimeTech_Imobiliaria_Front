import React, { useState } from "react";
import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, CssBaseline, Box, Avatar,
  Typography, IconButton, AppBar, Divider, Menu, MenuItem
} from "@mui/material";
import {
  Menu as MenuIcon, HomeRounded, AddBusinessRounded,
  BarChartRounded, DescriptionRounded, AttachMoneyRounded,
  ExpandLess, ExpandMore
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 280;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleUserMenuToggle = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { text: "Início", icon: <HomeRounded />, path: "/" },
    { text: "Adicionar Imóvel", icon: <AddBusinessRounded />, path: "/adicionar-imovel" },
    { text: "Relatório", icon: <BarChartRounded />, path: "/relatorio" },
    { text: "Contratos", icon: <DescriptionRounded />, path: "/contratos" },
    { text: "Financeiro", icon: <AttachMoneyRounded />, path: "/financeiro" },
  ];

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: "#5A3E2B",
        height: "100vh",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingY: 2,
        boxShadow: 3,
      }}
    >
      <Box sx={{ paddingX: 3, paddingBottom: 2, textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Imobiliária
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", marginBottom: 2 }} />
      <List sx={{ flexGrow: 1, paddingX: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                borderRadius: 3,
                marginX: 1,
                color: "#FFF",
                transition: "0.3s",
                "&:hover": { backgroundColor: "#FFF", color: "#5A3E2B" },
              }}
            >
              <ListItemIcon sx={{ color: "#5A3E2B", minWidth: 40, transition: "0.3s" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ fontSize: "1.1rem" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", marginBottom: 1 }} />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Editar Usuário</MenuItem>
        <MenuItem onClick={handleMenuClose}>Ajustes</MenuItem>
      </Menu>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#E5C7A9",
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 3,
          marginX: 1,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { backgroundColor: "#D4B89C" },
        }}
        onClick={handleUserMenuToggle}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#5A3E2B", mr: 1 }}>U</Avatar>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>Usuário</Typography>
        </Box>
        <IconButton size="small">
          {anchorEl ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#5A3E2B", display: { md: "none" } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>Imobiliária</Typography>
        </Toolbar>
      </AppBar>
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
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#5A3E2B" }
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
