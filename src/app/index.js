import { CurrentRenderContext } from "expo-router/react-navigation";
import {useState} from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";

export default function HomeScreen() {
  const [ativo, setAtivo] = useState("inicio");

  return (

    //invenção minha

    <View style={{ flex: 1, backgroundColor: "#FFF9EC" }}>
  
  <View style={styles.menu}>
    <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuText}> Início </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuText}> Cardápio </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuText}> Promoções </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuText}> Contato </Text>
  </TouchableOpacity>
</View>


    <ScrollView style={styles.container}>

    <View style={styles.header}>

    <View style={styles.welcomeCard}>
      <Text style={styles.greeting}>Seja muito bem-vindo(a) à DOCE POMAR! 👋</Text>

      <Text style={styles.descricao}>
      Aqui você encontra saladas de frutas deliciosas! 🍇🍍🥝
      </Text>
      <View style={styles.divisao}/>
      <Text style={styles.slogan}>DOCE POMAR — o sabor natural que conquista você!</Text>
    </View>
  </View>



        <Text style={styles.title}>
          Qual combinação chama sua atenção?
        </Text>

      <View style={styles.banner}>
        <Text style={styles.offer}>
          OFERTA ESPECIAL
        </Text>

        <Text style={styles.bannerTitle}>
          Banana + Morango
        </Text>

        <Text style={styles.bannerText}>
          Uma combinação perfeita para seu pedido, pela metade do preço!!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Peça agora  ➜
          </Text>
        </TouchableOpacity>



        <Image
        source={require("../../assets/images/frutas_banner.png")}
        style={styles.bannerImage}
        resizeMode="contain"
        />


      </View>


      <Text style={styles.sectionTitle}>
        Categorias :
      </Text>

      <View style={styles.categorias}>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🍌</Text>
          <Text>Saladas tradicionais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🥝</Text>
          <Text>Saladas especiais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🍫</Text>
          <Text>Com adicionais</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({



  bannerImage: {
    position: "absolute",
    right: 22,
    width: 120,
    height: 240,
    bottom: -80,
  },



  welcomeCard: {
    backgroundColor: "#FFF9EC",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F0DFC0",
    padding: 20,
    marginTop: -5,
  },

  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#355D2D",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    lineHeight: 22, // espaço entre as linhas, deixa mais fácil de ler
    color: "#4F6B47",
  },

  divisao: {
    height: 1,
    backgroundColor: "#F0DFC0", // linha fina separando o texto do slogan
    marginVertical: 14,
  },

  slogan: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#A95F25",
  },

  menu: {
    flexDirection: "row", // itens lado a lado
    justifyContent: "space-around", // espaço entre os itens
    backgroundColor: "#355D2D",
    paddingTop: 10, // espaço da barra de status do celular
    paddingBottom: 12,
  },

  menuItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent", // reserva o espaço do sublinhado, senão o item "pula" ao selecionar
  },

  menuText: {
    fontSize: 14,
    color: "#E4EBD9",
  },




  container: {
    flex: 1,
    backgroundColor: "#FFF9EC",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#355D2D",
    fontWeight: "bold"
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: 'Georgia',
    color: "#A95F25",
  },

  banner: {
    backgroundColor: "#355D2D",
    borderRadius: 20,
    padding: 25,
    marginTop: 17,
  },

  offer: {
    color: "#FFD76A",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  bannerText: {
    color: "#ffff",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#FFD76A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-start", // ele posiciona o botão longe da margen inicial
  },

  buttonText: {
    color: "#355D2D",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30, // distância do nome com o coiso de cima
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Yeseva One",
    color: "#355D2D"
  },

  categorias: {
    flexDirection: "row", // sem isso ficaria na horizontal
    justifyContent: "space-between", // espaço entre os botões
  },

  category: {
    width: "30%", // espaço que o botão toma
    backgroundColor: "#FFF9EC",
    paddingVertical: 18,
    borderRadius: 15,
    borderColor: "#F0DFC0",
    borderWidth: 1,
    alignItems: "center",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },

});