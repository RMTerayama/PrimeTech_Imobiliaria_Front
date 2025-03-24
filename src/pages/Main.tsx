import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Card, CardContent, Typography, CardMedia, Container, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'; // Importe o tipo SelectChangeEvent

const Main = () => {
  const [tipo, setTipo] = useState('aluguel');
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };

  const handleTipoChange = (event: SelectChangeEvent<string>) => {
    setTipo(event.target.value);
  };

  // Lista de imóveis (Exemplo)
  const imoveis = [
    {
      id: 1,
      imagem: 'https://placehold.co/300',
      titulo: 'Apartamento no Centro',
      valor: 'R$ 1.200,00',
      descricao: 'Apartamento de 2 quartos com ótima localização no centro da cidade.',
    },
    {
      id: 2,
      imagem: 'https://placehold.co/300',
      titulo: 'Casa com Piscina',
      valor: 'R$ 300.000,00',
      descricao: 'Linda casa com 3 quartos e piscina no jardim.',
    },
    {
      id: 3,
      imagem: 'https://placehold.co/300',
      titulo: 'Sala Comercial',
      valor: 'R$ 1.500,00',
      descricao: 'Sala comercial no centro, ideal para escritórios e consultórios.',
    },
    {
      id: 4,
      imagem: 'https://placehold.co/300',
      titulo: 'Cobertura Luxuosa',
      valor: 'R$ 2.500.000,00',
      descricao: 'Cobertura de alto padrão com vista panorâmica da cidade.',
    },
    {
      id: 5,
      imagem: 'https://placehold.co/300',
      titulo: 'Chácara no Interior',
      valor: 'R$ 800.000,00',
      descricao: 'Linda chácara com área ampla e espaço para lazer e eventos.',
    },
    {
      id: 6,
      imagem: 'https://placehold.co/300',
      titulo: 'Loja Comercial',
      valor: 'R$ 5.000,00',
      descricao: 'Loja comercial localizada em área de grande fluxo de pessoas.',
    },
  ];

  // Filtrando imóveis com base na pesquisa (se houver)
  const imoveisFiltrados = imoveis.filter((imovel) =>
    imovel.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      {/* Título da página */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        Imóveis
      </Typography>

      {/* Caixa para Pesquisa e Tipo de Imóvel */}
      <Box sx={{ marginBottom: 4 }}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Campo de Pesquisa */}
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              label="Pesquisar Imóveis"
              variant="outlined"
              value={pesquisa}
              onChange={handlePesquisaChange}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                padding: 1,
              }}
            />
          </Grid>

          {/* Seletor Tipo de Imóvel */}
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel>Tipo</InputLabel>
              <Select value={tipo} onChange={handleTipoChange} label="Tipo" sx={{ backgroundColor: '#fff' }}>
                <MenuItem value="aluguel">Aluguel</MenuItem>
                <MenuItem value="venda">Venda</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Lista de Cards de Imóveis */}
      <Grid container spacing={3}>
        {imoveisFiltrados.map((imovel) => (
          <Grid item xs={12} sm={6} md={4} key={imovel.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={imovel.imagem}
                alt={imovel.titulo}
                sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
              />
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  {imovel.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  {imovel.valor}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {imovel.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
