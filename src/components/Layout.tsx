import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box, Toolbar } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <Box component="main" sx={{ flexGrow: 1, height: "100vh" }}>
        <Outlet /> {/* Renderiza o conteúdo das páginas */}
      </Box>
    </Box>
  );
};

export default Layout;
