import { Audio } from 'expo-av';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';
import LogedContext from '../context/UserContext';



const AudioApp: React.FC = () => {

  //se instancian los states necesarios para la grabacion del audio, guardar los audios
  //y guardar una lista de audios ademas de guardar la duracion de cada audio
  const [ recording, setRecording ] = useState<Audio.Recording | null>(null);
  const [ recordings, setRecordings ] = useState<Audio.Recording[]>([])
  const [ isRecording, setIsRecording ] = useState(false);
  const [recordingDurations, setRecordingDurations] = useState<number[]>([]);


  //useeffect para guardar la duracion de cada audio y mostararlo en tiempo real
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;


    //condicional con el que si se esta grabando lo guarda automaticamente y lo retorna
    //limpio para su posterior uso de nuevo
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDurations((prev) => [...prev.slice(0, -1), prev[prev.length - 1] + 1]);
      }, 1000);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isRecording]);


  //funcion con la que se empieza a grabar el audio del telefono si hay permisos y se puede y
  //guardandolos en un nuevo recording, setea el isRecording a true
  const startRecording = async () => {
    try {
      const recordingObject = new Audio.Recording();
      await recordingObject.prepareToRecordAsync();
      const status = await recordingObject.getStatusAsync()

      if (status.canRecord) {
        await recordingObject.startAsync();

        setRecording(recordingObject);
        setIsRecording(true);
      } else {
        console.error('El objeto de grabación no está preparado para grabar.');
      }
    } catch (error) {
      console.error('Error al comenzar la grabación:', error);
    }
  };

  //funcion con la que si se esta grabando se para de grabar y se guarda en la lista de audios 
  //el nuevo audio completo guardado en recording, setea el recording a false.
  const stopRecording = async () => {
    if (recording) {
      try {
        setRecordings([...recordings, recording])
        await recording.stopAndUnloadAsync()
        setIsRecording(false);
      } catch (error) {
        console.error('Error al detener la grabación:', error)
      }
    }
  };


  //funcion a la que se le pasa un audio por parametro y lo reproduce
  const playRecording = async (audio: Audio.Recording) => {
    try {
      const { sound } = await audio.createNewLoadedSoundAsync()
      await sound.playAsync()
    } catch (error) {
      console.error('Error al reproducir la grabación:', error)
    }
  };

  //funcion a la que se le pasa un audio por parametro y lo borra de la lista recordings con un filter
  const deleteRecording = async (audio: Audio.Recording) => {
    try {
      const newRecordings = recordings.filter(item => item !== audio);
      setRecordings(newRecordings)
    } catch (error) {
      console.error('Error al borrar la grabación:', error)
    }
  }

  //funcion que renderiza cada audio que se le pasa por parametro con botones para 
  //reproducirlo o para borrarlo
  const renderRecording = ({ item, index }: { item: Audio.Recording, index: number }) => (
    <View>
      <Text>Audio{index +1}:</Text>
      <Button title="Reproducir" onPress={() => playRecording(item)} />
      <Button title="borrar" onPress={() => deleteRecording(item)} />
    </View>
  );
    return (
        <View style={styles.container}>
          <View style={styles.background}></View>
          <View style={styles.welcomeContainer}>
            <Button
              title={isRecording ? 'Detener Grabación' : 'Comenzar Grabación'}
              onPress={isRecording ? stopRecording : startRecording}
            />
            {isRecording && (
              <Text>Audio Duración: {recordingDurations} segundos</Text>            
              )}
            <Text>tiene {recordings.length} audios grabados</Text>
          </View>
          <FlatList data={recordings} renderItem={renderRecording}>
            
          </FlatList>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'lightblue', 
      },
      welcomeContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        alignItems: 'center',
        elevation: 5, 
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    });
export default AudioApp