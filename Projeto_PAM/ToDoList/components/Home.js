import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, Pressable } from 'react-native';

 //tela principal
 //titulo do aplicativo; campo de texto para digirtar una tarefa ; botao para adicionar tarefa
//listas de tarefas --> flatlist
function Home()  
{ 
    return(
  <ScrollView>
    <view>
        <text style={styles.Titulo}> ＴＯ ＤＯ ＬＩＳＴ </text>
    </view>
    <View>
        <Text>Digite a tarefa que você deseja adicionar a sua To Do List: </Text>
    <View>
    <Text> </Text>
    </View> 
      <TextInput
        style={style.input}//---> acessa a propriedade input do objeto styles
        value={texto}
        onChangeText={(texto) => setTexto(texto)}
      />
      <Pressable style={styles.BtnAdicionar}>
        <text>Clique para adicionar uma tarefa</text>
        onPress= {()=>{ AdicionaTarefa()}}
      </Pressable>
    </View>
  </ScrollView> 
  )
}

export default Desafios; //para especificar o componente visual
const style = StyleSheet.create({
Titulo: {
    
    backgroundColor: 'lightblue',
    borderRadius: 4,
    padding:3,
    paddingLeft:33,
    marginTop: 5,
}
});
