import { Audio } from 'expo-av';
import { SoundObject } from 'expo-av/build/Audio';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen: React.FC = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [ audios, setAudios] = useState<Audio.Recording[]>([])
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    Audio.requestPermissionsAsync();
  }, []);

  const startRecording = async () => {
    try {
      const recordingObject = new Audio.Recording();

      
      await recordingObject.prepareToRecordAsync();

      
      const status = await recordingObject.getStatusAsync();
      if (status.canRecord) {
        // Iniciar grabación
        await recordingObject.startAsync();
        setRecording(recordingObject);

        setAudios([...audios, recordingObject])
        setIsRecording(true);
      } else {
        console.error('El objeto de grabación no está preparado para grabar.');
      }
    } catch (error) {
      console.error('Error al comenzar la grabación:', error);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      try {
        await recording.stopAndUnloadAsync();
        setIsRecording(false);
        //setRecording(null);
      } catch (error) {
        console.error('Error al detener la grabación:', error);
      }
    }
  };

  const playRecording = async () => {
    console.log("kdldgf")
    if (recording) {
      console.log("first")
      const { sound }: SoundObject = await recording.createNewLoadedSoundAsync();
      await sound.playAsync();
    }
  };

    return (
        <View style={styles.container}>
          <View style={styles.background}></View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Bienvenido a la Aplicación</Text>
            <Button
              title={isRecording ? 'Detener Grabación' : 'Comenzar Grabación'}
              onPress={isRecording ? stopRecording : startRecording}
            />
            <Text>tiene {audios.length} audios grabados</Text>
            <Button title="Reproducir Grabación" onPress={playRecording} />
          </View>
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
export default HomeScreen