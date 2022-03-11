import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Touchable } from 'react-native';
import react, { useState } from 'react';

import iconErase from './img/trashCan.png';
import iconSum from './img/sum.png';
import iconSubtract from './img/subtract.png';
import iconMultiply from './img/multiply.png';
import iconDivide from './img/divide.png';

import styles from './styles'

export default function App() {

  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [result, setResult] = useState(0);

  function sum() {
    let r = Number.parseFloat(valueA.toString().replace(',', '.')) + Number.parseFloat(valueB.toString().replace(',', '.'));
    setResult(r);
  }

  function subtract() {
    let r = Number.parseFloat(valueA.toString().replace(',', '.')) - Number.parseFloat(valueB.toString().replace(',', '.'));
    setResult(r);
  }

  function multiply() {
    let r = Number.parseFloat(valueA.toString().replace(',', '.')) * Number.parseFloat(valueB.toString().replace(',', '.'));
    setResult(r);
  }

  function divide() {
    let r = Number.parseFloat(valueA.toString().replace(',', '.')) / Number.parseFloat(valueB.toString().replace(',', '.'));
    setResult(r);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎛 Calculadora</Text>
      
      <View>
        <Text style={styles.infoText}>Digite o primeiro valor:</Text>

        <View style={styles.containerTextInput}>
          <TextInput 
            style={styles.textBox}
            keyboardType='decimal-pad'
            onChangeText={(text) => setValueA(text)}
            value={valueA.toString()}>
          </TextInput>

          <TouchableOpacity onPress={() => setValueA(0)}>
            <Image 
              source={iconErase}
              style={styles.iconErase}>
            </Image>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.infoText}>Digite o segundo valor:</Text>
        
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textBox}
            keyboardType='decimal-pad'
            onChangeText={(text) => setValueB(text)}
            value={valueB.toString()}>
          </TextInput>

          <TouchableOpacity onPress={() => setValueB(0)}>
            <Image 
              source={iconErase}
              style={styles.iconErase}>
            </Image>
          </TouchableOpacity>
        </View>
      </View>



      <View style={styles.containerOperations}>
        <TouchableOpacity onPress={() => sum()}>
          <Image 
            source={iconSum}
            style={styles.iconOperations}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => subtract()}>
          <Image 
            source={iconSubtract}
            style={styles.iconOperations}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => multiply()}>
          <Image 
            source={iconMultiply}
            style={styles.iconOperations}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => divide()}>
          <Image 
            source={iconDivide}
            style={styles.iconOperations}>
          </Image>
        </TouchableOpacity>
      </View>


      <View styles={styles.resultContainer}>
        <Text style={styles.infoText}>Resultado: {result.toFixed(2)}</Text>   
      </View>

      <StatusBar style="auto" />
    </View>
  );
}