import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  IconButton,
  OutlinedInput,
  Modal,
  Fade,
  Backdrop
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CardMedia } from "@mui/material";

type TipoContrato = "aluguel" | "venda";

const AdicionarImovel = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [tipoContrato, setTipoContrato] = useState<TipoContrato[]>([]); // Mudança para array
  const [valorAluguel, setValorAluguel] = useState("");
  const [valorVenda, setValorVenda] = useState("");
  const [imagens, setImagens] = useState<File[]>([]);
  const [proprietario, setProprietario] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [nomeProprietario, setNomeProprietario] = useState("");
  const [telefoneProprietario, setTelefoneProprietario] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [emailProprietario, setEmailProprietario] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [documentos, setDocumentos] = useState<File[]>([]);

  const proprietarios = ["João Silva", "Maria Souza", "Carlos Lima"];

  // Simula busca de CEP e preenche automaticamente os campos
  const buscarCep = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setRua(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    }
  };

  // Manipula upload de imagens
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImagens((prev) => [...prev, ...filesArray]);
    }
  };

  // Remove imagem da lista
  const removerImagem = (index: number) => {
    setImagens(imagens.filter((_, i) => i !== index));
  };

  // Manipula upload de documentos
  const handleUploadDocumentos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setDocumentos((prev) => [...prev, ...filesArray]);
    }
  };

  // Remove documento da lista
  const removerDocumento = (index: number) => {
    setDocumentos(documentos.filter((_, i) => i !== index));
  };

  // Função para abrir o modal de proprietário
  const handleOpenModal = () => setOpenModal(true);

  // Função para fechar o modal de proprietário
  const handleCloseModal = () => setOpenModal(false);

  // Função para salvar o proprietário
  const handleSalvarProprietario = () => {
    console.log({
      nomeProprietario,
      telefoneProprietario,
      cpfCnpj,
      emailProprietario,
      dataNascimento,
      documentos,
    });
    handleCloseModal();
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="#774B34">
        Adicionar Imóvel
      </Typography>

      <Grid container spacing={2}>
        {/* CEP */}
        <Grid item xs={12} sm={4}>
          <TextField
            label="CEP"
            variant="outlined"
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={buscarCep}
          />
        </Grid>

        {/* Rua */}
        <Grid item xs={12} sm={8}>
          <TextField label="Rua" variant="outlined" fullWidth value={rua} disabled />
        </Grid>

        {/* Bairro */}
        <Grid item xs={12} sm={6}>
          <TextField label="Bairro" variant="outlined" fullWidth value={bairro} disabled />
        </Grid>

        {/* Número */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Número"
            variant="outlined"
            fullWidth
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Grid>

        {/* Cidade */}
        <Grid item xs={12}>
          <TextField label="Cidade" variant="outlined" fullWidth value={cidade} disabled />
        </Grid>

        {/* Tipo de Contrato */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Tipo de Contrato</InputLabel>
            <Select
              multiple
              value={tipoContrato}
              onChange={(e) => setTipoContrato(e.target.value as TipoContrato[])}
              input={<OutlinedInput label="Tipo de Contrato" />}
            >
              <MenuItem value="aluguel">Aluguel</MenuItem>
              <MenuItem value="venda">Venda</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Inputs Condicionais de Valor */}
        {tipoContrato.includes("aluguel") && (
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor/Mês"
              variant="outlined"
              fullWidth
              value={valorAluguel}
              onChange={(e) => setValorAluguel(e.target.value)}
            />
          </Grid>
        )}

        {tipoContrato.includes("venda") && (
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor Venda"
              variant="outlined"
              fullWidth
              value={valorVenda}
              onChange={(e) => setValorVenda(e.target.value)}
            />
          </Grid>
        )}

        {/* Upload de Imagens */}
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload de Imagens
            <input type="file" multiple hidden onChange={handleUpload} accept="image/*" />
          </Button>
        </Grid>

        {/* Pré-visualização das Imagens */}
        {imagens.length > 0 && (
          <Grid item xs={12}>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {imagens.map((img, index) => (
                <Card key={index} sx={{ width: 120, position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={URL.createObjectURL(img)}
                    alt="Imagem do imóvel"
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                    }}
                    onClick={() => removerImagem(index)}
                  >
                    <Delete />
                  </IconButton>
                </Card>
              ))}
            </Box>
          </Grid>
        )}

        {/* Proprietário */}
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="proprietario-label">Proprietário</InputLabel>
            <Select
              labelId="proprietario-label"
              value={proprietario}
              onChange={(e) => setProprietario(e.target.value)}
              label="Proprietário"
            >
              {proprietarios.map((nome) => (
                <MenuItem key={nome} value={nome}>
                  {nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Botão para cadastrar novo proprietário */}
        <Grid item xs={12}>
          <Button variant="outlined" onClick={handleOpenModal}>
            Proprietário não cadastrado
          </Button>
        </Grid>

        {/* Botão de Salvar */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Salvar
          </Button>
        </Grid>
      </Grid>

      {/* Modal para Adicionar Proprietário */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" mb={2}>
              Adicionar Proprietário
            </Typography>

            {/* Nome Completo */}
            <TextField
              label="Nome Completo"
              variant="outlined"
              fullWidth
              value={nomeProprietario}
              onChange={(e) => setNomeProprietario(e.target.value)}
              margin="normal"
            />

            {/* Número de telefone */}
            <TextField
              label="Número de Telefone"
              variant="outlined"
              fullWidth
              value={telefoneProprietario}
              onChange={(e) => setTelefoneProprietario(e.target.value)}
              margin="normal"
            />

            {/* CPF/CNPJ */}
            <TextField
              label="CPF/CNPJ"
              variant="outlined"
              fullWidth
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              margin="normal"
            />

            {/* Email */}
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              value={emailProprietario}
              onChange={(e) => setEmailProprietario(e.target.value)}
              margin="normal"
            />

            {/* Data de Nascimento */}
            <TextField
              label="Data de Nascimento"
              variant="outlined"
              fullWidth
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Upload de Documentos */}
            <Button variant="contained" component="label" sx={{ marginTop: 2 }}>
              Upload de Documentos
              <input
                type="file"
                multiple
                hidden
                onChange={handleUploadDocumentos}
                accept="application/pdf,image/*"
              />
            </Button>

            {/* Lista de documentos */}
            {documentos.length > 0 && (
              <Box sx={{ marginTop: 2 }}>
                {documentos.map((doc, index) => (
                  <Box key={index} display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">{doc.name}</Typography>
                    <IconButton onClick={() => removerDocumento(index)} color="error">
                      <Delete />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}

            {/* Botões */}
            <Box display="flex" justifyContent="flex-end" gap={2} sx={{ marginTop: 2 }}>
              <Button onClick={handleCloseModal}>Cancelar</Button>
              <Button variant="contained" color="primary" onClick={handleSalvarProprietario}>
                Salvar
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AdicionarImovel;
