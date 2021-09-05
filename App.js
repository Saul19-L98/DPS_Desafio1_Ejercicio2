import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput,Button } from 'react-native';

const DataResult = (props) => { 
  const {title, value} = props;
  return ( 
      <View style={styles.value}> 
          <Text>{title}</Text>
          <Text>{value}</Text> 
      </View>
  );
} 

export default function App() {
  const [fullname, setFullName] = useState(null);
  const [wage, setWage] = useState(null);
  const [netWage, setNetWage ] = useState(null);
  const [errorMessage, setErrorMessage ] = useState('');

  const calculate = () => {
    reset()
    if(!fullname)
    {
      setErrorMessage('Falta el nombre 😬');
    }
    if(!wage)
    {
      setErrorMessage('Falta el salario 🙄');
    }
    if(!fullname && !wage){
      setErrorMessage('Ingrese sus datos 😑');
    }
    else
    {
      const isss =0.03;
      const afp =0.04;
      const renta =0.05;
      const net = `: gana: $ ${(wage - (wage*isss + wage*afp + wage*renta).toFixed(2))}`;
      console.log(net);
      setNetWage({
        base: net,
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setNetWage(null);
  };

  const Resolution = (props) => {
    const {fullname, netWage,errorMessage} = props;
    return (<View>
        { netWage && (
          <View > 
            <DataResult title={`${fullname}`} value={` ${netWage.base}`} />
          </View>
        )}
          <View> 
            <Text style={styles.error}>{errorMessage}</Text> 
          </View>
        </View>)
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.tittleText}>Salario Neto.</Text>
      <TextInput 
        placeholder="Nombre completo 😁" 
        keyboardType="name-phone-pad"
        style={styles.input}
        onChange={(e) => setFullName(e.nativeEvent.text)}
      />  
      <TextInput
        placeholder="Variable B" 
        keyboardType="numeric"
        style={styles.input} 
        onChange={(e) => setWage(e.nativeEvent.text)}
      />
      <Resolution
        fullname = {fullname}
        netWage = {netWage}
        errorMessage = {errorMessage}
      />
      <Button title="Ver Salario 🛠" styles={styles.Button} onPress={calculate}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittleText:{
    fontSize:20,
    fontWeight:'bold',
    color:'red',
  },
  input:{
    // margin: 10,
    height: 50, 
    backgroundColor:'#fff', 
    borderWidth: 1, 
    borderColor:'#8030db',
    borderRadius: 5,  
    marginRight: 5, 
    marginLeft: -5, 
    marginBottom: 10, 
    color: '#000', 
    paddingHorizontal: 20,
    width: '60%', 
    fontSize:10,
  },
  Button:{
    backgroundColor:'#750025',
  },
  value: { 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    margin:5,
    fontSize: 20, 
  },
  error: { 
    textAlign: 'center', 
    color: '#f00',
    fontWeight: 'bold', 
    fontSize: 20, 
  },
  boxResult: { 
    padding: 30,
    fontSize:10,
  },      
});
