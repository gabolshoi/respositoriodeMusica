import { Text, TextInput, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [tela, setTela] = useState('login'); 
  const [textoUsuario, setTextoUsuario] = useState('');
  const [textoSenha, setTextoSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const usuariosCadastrados = [
    { usuario: 'gabriela.santos', senha: 'senha1' },
    { usuario: 'emilly.soriano', senha: 'senha2' },
    { usuario: 'ezequiel.santos', senha: 'senha3' },
    { usuario: 'chico.moedas', senha: 'senha4' },
  ];

  const validarCredenciais = () => {
    const usuarioValido = usuariosCadastrados.find(
      (user) => user.usuario == textoUsuario && user.senha == textoSenha
    );

    if (usuarioValido) {
      setMensagem('Login bem sucedido!');
      setTimeout(() => {
        setTela('home'); 
      }, 1000);
    } else {
      setMensagem('Usuário ou senha inválidos.');
    }
  };

  const telaLogin = (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/51/33/75/5133754804ea8c3069ae0fdf4fee9aa8.jpg'}}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.EstiloSafeAreaView}>
        <Text style={styles.EstiloTextoCentralizado}>ENTRE NO SEU PERFIL</Text>

        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5550/5550463.png' }}
          style={styles.EstiloImagem}
        />

        <TextInput
          placeholder="USUÁRIO"
          placeholderTextColor="grey"
          style={styles.EstiloTexto}
          onChangeText={(value) => setTextoUsuario(value)}
        />

        <TextInput
          placeholder="SENHA"
          placeholderTextColor="grey"
          secureTextEntry={true}
          style={styles.EstiloTexto}
          onChangeText={(value) => setTextoSenha(value)}
        />

        <TouchableOpacity style={styles.EstiloTextoBotao} onPress={validarCredenciais}>
          <Text style={styles.EstiloTextoBotao}>ENTRAR</Text>
        </TouchableOpacity>

        {mensagem ? <Text style={[styles.EstiloMensagem, mensagemEstilo(mensagem)]}>{mensagem}</Text> : null}
      </SafeAreaView>
    </ImageBackground>

  );

   const telaHome = (
    <ImageBackground
      source={{uri: 'https://i.pinimg.com/564x/51/33/75/5133754804ea8c3069ae0fdf4fee9aa8.jpg'}}
      style={{ flex: 1 }}
    >
    <SafeAreaView style={styles.EstiloSafeAreaView}>
        <Text style={styles.EstiloTextoCentralizado}>Bem-vindo à Tela Inicial!</Text>
        <Text style={styles.EstiloTextoCentralizado}>Você está logado com sucesso.</Text>
      </SafeAreaView>
    </ImageBackground>
  );

  return <>{tela == 'login' ? telaLogin : telaHome}</>;
}

const styles = StyleSheet.create({
  EstiloSafeAreaView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },

  EstiloTexto: {
    width: '70%',
    borderWidth: 1,
    marginBottom: 20,
    height: 40,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: 'white',
  },

  EstiloTextoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'pink',
    borderRadius: 90,
    padding: 5,
  },

  EstiloTextoCentralizado: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
  },

  EstiloImagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },

  EstiloMensagem: {
    padding: 30,
    fontWeight: 'bold',
  },

  mensagemSucesso: {
    color: 'green',
  },

  mensagemErro: {
    color: 'red',
  },

});

const mensagemEstilo = (mensagem) =>
  mensagem == 'Login bem sucedido!' ? styles.mensagemSucesso : styles.mensagemErro;
