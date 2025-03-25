import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
    Grid,
  } from "@mui/material";
  
  const Login = () => {
    return (
        <Grid
        container
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Imagem */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/login-image.jpg"
            alt="Imagem"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      
        {/* Formulário */}
        <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center" // CENTRALIZA VERTICALMENTE
            justifyContent="center" // CENTRALIZA HORIZONTALMENTE
            bgcolor="#fff"
            sx={{ height: "100vh" }} // garante altura total da tela
            >
            <Box
                sx={{
                width: "100%",
                maxWidth: 400,
                padding: 4,
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    />
                    <TextField
                    label="Senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    />
                    <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        backgroundColor: "#333",
                        "&:hover": { backgroundColor: "#111" },
                    }}
                    >
                    Acessar
                    </Button>
                </Box>
                </Paper>
            </Box>
            </Grid>

      </Grid>      
    );
  };
  
  export default Login;
  