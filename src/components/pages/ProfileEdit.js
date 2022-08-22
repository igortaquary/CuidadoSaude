import React, { useContext, useState } from "react"
import { Alert, Button, Image, KeyboardAvoidingView, 
  Platform, StyleSheet, TextInput, TouchableOpacity, 
  TouchableWithoutFeedback, View, Keyboard, ScrollView } from "react-native"
import { commonStyles, PRIMARY_COLOR, TEXT_BLACK } from "../../constants/styles"
import { AuthContext } from "../../contexts/AuthContext"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import StyledText from "../features/StyledText";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInputMask } from 'react-native-masked-text'

const diagnoses = ["Deficiência intelectual", "Deficiência física", "Deficiência visual", 
  "Deficiência auditiva", "Deficiência múltipla", "Transtorno do espectro autista", 
  "Surdo-cegueira", "Altas habilidades/superdotação"]

const ProfileEditPage = ({ navigator }) => {

  const { saveUser } = useContext(AuthContext);

  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [phone, setPhone] = useState();
  const [guardians, setGuardians] = useState([])

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

  const handleAddGuardian = () => {
    const newGuardian = { name: "", phone: "" }
    setGuardians(p => [...p, newGuardian]);
  }

  const handleRemoveGuardian = (index) => {
    if(guardians[index].name || guardians[index].phone) {
      Alert.alert("Apagar responsável?", "",
        [
          { 
            text: "Apagar",
            style: "destructive",
            onPress: () => setGuardians( (p) => p.filter( (g, gi) => gi !== index ) )
          },
          {
            text: "Cancelar",
            style: "cancel"
          }
        ],
        { cancelable: true }
      )
    } else {
      setGuardians( (p) => p.filter( (g, gi) => gi !== index ) )
    }
  }

  const handleChangeGuardian = (index, key, value) => {
    const aux = []
    guardians.forEach( (guardian, i) => {
      if(i === index) {
        guardian[key] = value
        aux.push(guardian)
      } else {
        aux.push(guardian)
      }
    })
    setGuardians(aux)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={commonStyles.container} >
        <StyledText header mb={10}>Foto</StyledText>
        <View style={styles.photoViewContainer}>
          {photo ?
            <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoView} >
              <Image style={{  width: "100%", height: "100%" }} source={{ uri: photo }} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoView} >
              <Feather name="camera" size={50} color={TEXT_BLACK} />
              <StyledText center>Escolha uma foto</StyledText>
            </TouchableOpacity>
          }
        </View>
        <StyledText header mb={10}>Dados pessoais</StyledText>
        <View>
          <StyledText>Nome completo</StyledText>
          <TextInput 
            style={commonStyles.textInput}
            placeholder="Ex: Fulano da Silva"
            value={name}
            onChangeText={setName}
            selectionColor={PRIMARY_COLOR}
          />
        </View>
        <View>
          <StyledText>Data de nascimento</StyledText>
          <TextInputMask 
            style={commonStyles.textInput} 
            type={"custom"}
            options={{mask: "99/99/9999"}}
            value={birthday}
            onChangeText={setBirthday}
            placeholder="Ex: 01/01/2000"
            selectionColor={PRIMARY_COLOR}
          />
        </View>
        <View>
          <StyledText header mb={10} mt={10}>Diagnóstico atual</StyledText>
          { diagnoses.map((d, i) => 
            <TouchableOpacity
              key={i}
              style={styles.radioContainer}
              onPress={() => setDiagnosis(d)}>
              <MaterialCommunity 
                name={diagnosis === d ? "circle-slice-8" : "circle-outline"} 
                size={20} 
                color={TEXT_BLACK}
              />
              <StyledText ml={10} >{d}</StyledText>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <StyledText header mb={10} mt={10}>Contato</StyledText>
          <StyledText>Endereço</StyledText>
          <TextInput
            style={commonStyles.textInput}
            placeholder="Ex: rua, bairro, cidade e estado"
            selectionColor={PRIMARY_COLOR}
          />
          <StyledText>Telefone</StyledText>
          <TextInputMask
            style={commonStyles.textInput}
            selectionColor={PRIMARY_COLOR}
            placeholder="Ex: (99) 1234-6789"
            type="cel-phone"
            options={{ withDDD: true, maskType: "BRL" }}
            value={phone}
            onChangeText={setPhone}
          />
          <StyledText>E-mail</StyledText>
          <TextInput
            selectionColor={PRIMARY_COLOR}
            style={commonStyles.textInput}
            placeholder="Ex: meunome@email.com"
          />
        </View>
        <View>
          <StyledText header mb={10} mt={10}>Responsáveis</StyledText>
          <View>
            <View style={styles.radioContainer}>
              <View style={styles.flexOne}>
                <StyledText>Nome</StyledText>
              </View>
              <View style={styles.flexOne}>
                <StyledText>Telefone</StyledText>
              </View>
            </View>
            { guardians.map( (guardian, i) => 
              <View style={styles.radioContainer} key={i}>
                <TextInput
                  value={guardian.name}
                  onChangeText={ t => handleChangeGuardian(i, "name", t) }
                  style={{...commonStyles.textInput, ...styles.flexOne}} 
                />
                <TextInputMask
                  style={{...commonStyles.textInput, ...styles.flexOne, marginLeft: 10}}
                  selectionColor={PRIMARY_COLOR}
                  placeholder="(99) 1234-6789"
                  type="cel-phone"
                  options={{ withDDD: true, maskType: "BRL" }}
                  value={guardian.phone}
                  onChangeText={ t => handleChangeGuardian(i, "phone", t) }
                />
                <TouchableOpacity
                  style={{width: 30, marginLeft: 10}}
                  onPress={() => handleRemoveGuardian(i)}
                >
                  <MaterialCommunity name="trash-can-outline" color={PRIMARY_COLOR} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Button 
            title="Adicionar responsável" 
            onPress={handleAddGuardian}
            disabled={guardians.some( g => g.name === "" || g.phone === "")} 
          />
        </View>
        <View style={{marginBottom: 40}}>
          <Button title="Criar conta" onPress={handleCreateUser} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  photoViewContainer: {
    alignSelf: "center", 
    width: 300, 
    height: 300,
    marginBottom: 20,
  },
  photoView: {
    backgroundColor: "#DDD",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  flexOne: {
    flex: 1
  },
  flexTwo: {
    flex: 2
  }
})

export default ProfileEditPage;