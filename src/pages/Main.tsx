import React, { useState } from 'react';
import { 
  TextField, Select, MenuItem, InputLabel, FormControl, 
  Grid, Card, CardContent, Typography, CardMedia, 
  Box 
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

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
      imagem: 'https://placehold.co/600x400',
      titulo: 'Apartamento no Centro',
      valor: 'R$ 1.200,00',
      descricao: 'Apartamento de 2 quartos com ótima localização no centro da cidade.',
    },
    {
      id: 2,
      imagem: 'https://placehold.co/600x400',
      titulo: 'Casa com Piscina',
      valor: 'R$ 300.000,00',
      descricao: 'Linda casa com 3 quartos e piscina no jardim.',
    },
    {
      id: 3,
      imagem: 'https://placehold.co/600x400',
      titulo: 'Sala Comercial',
      valor: 'R$ 1.500,00',
      descricao: 'Sala comercial no centro, ideal para escritórios e consultórios.',
    },
    {
      id: 4,
      imagem: 'https://placehold.co/600x400',
      titulo: 'Cobertura de Luxo',
      valor: 'R$ 1.000.000,00',
      descricao: 'Cobertura de alto padrão com vista panorâmica da cidade.',
    },
  ];

  // Filtrando imóveis com base na pesquisa
  const imoveisFiltrados = imoveis.filter((imovel) =>
    imovel.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        padding: 3, 
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* Título no topo */}
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: "bold", 
          textAlign: "center", 
          mb: 4, 
          color: "#774B34"
        }}
      >
        Imóveis Disponíveis
      </Typography>

      {/* Filtros */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          gap: 2, 
          mb: 4,
          flexWrap: "wrap"
        }}
      >
        <TextField
          label="Pesquisar Imóveis"
          variant="outlined"
          value={pesquisa}
          onChange={handlePesquisaChange}
          sx={{ width: { xs: "100%", sm: "45%", md: "40%" } }}
        />

        <FormControl sx={{ width: { xs: "100%", sm: "30%", md: "20%" } }}>
          <InputLabel>Tipo</InputLabel>
          <Select value={tipo} onChange={handleTipoChange} label="Tipo">
            <MenuItem value="aluguel">Aluguel</MenuItem>
            <MenuItem value="venda">Venda</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Lista de Imóveis */}
      <Grid 
        container 
        spacing={3} 
        sx={{ 
          flexGrow: 1, // Faz com que o grid ocupe todo o espaço disponível
          justifyContent: imoveisFiltrados.length > 0 ? "center" : "flex-start"
        }}
      >
        {imoveisFiltrados.length > 0 ? (
          imoveisFiltrados.map((imovel) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={imovel.id}>
              <Card 
                sx={{ 
                  borderRadius: 3, 
                  boxShadow: 3, 
                  transition: "0.3s", 
                  backgroundColor: "#FFF",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 6 } 
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={imovel.imagem}
                  alt={imovel.titulo}
                  sx={{ borderRadius: "12px 12px 0 0" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{imovel.titulo}</Typography>
                  <Typography variant="body1" color="#774B34" fontWeight="bold">
                    {imovel.valor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {imovel.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          // Exibe mensagem caso nenhum imóvel seja encontrado
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ textAlign: "center", width: "100%", marginTop: 5 }}
          >
            Nenhum imóvel encontrado.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Main;
