import React, { useContext, useState } from "react"
import { Alert, Button, Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { commonStyles } from "../../constants/styles"
import { AuthContext } from "../../contexts/AuthContext"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import StyledText from "../features/StyledText";

const ProfileEditPage = ({ navigator }) => {

  const { saveUser } = useContext(AuthContext);

  const [photo, setPhoto] = useState();

  const handleCreateUser = async () => {

    navigator.navigate("Main");
  }

  const handleChoosePhoto = () => {
    Alert.alert("Escolha uma foto de perfil", "",
      [
        {
          text: "Tirar foto",
          onPress: async () => {
            const result = await launchCamera({ mediaType: "photo", includeBase64: true });
            console.log(result);
            if (result.assets && result.assets[0]) {
              setPhoto("data:image/png;base64," + result.assets[0].base64);
            }
          }
        },
        {
          text: "Biblioteca de fotos",
          onPress: async () => {
            const result = await launchImageLibrary({ mediaType: "photo", selectionLimit: 1, includeBase64: true });
            console.log(result);
            if (result.assets && result.assets[0]) {
              setPhoto(result.assets[0].base64);
            }
          }
        }
      ],
      { cancelable: true }
    )
  }

  return (
    <View style={commonStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {photo ?
          <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoView} >
            <Image style={{ width: 300, height: 300 }} source={{ uri: photo }} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoView} >
            <StyledText center>Escolha uma foto</StyledText>
          </TouchableOpacity>
        }
      </View>
      <Button title="Criar conta" onPress={handleCreateUser} />
    </View>
  )
}

const styles = StyleSheet.create({
  photoView: {
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300
  }
})

export default ProfileEditPage;