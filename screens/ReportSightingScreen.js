import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("observations.db");



function ReportSightingScreen({ route, navigation }) {
  const speciesId = route?.params?.speciesId || 'no speciesId';
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);
  const [observations, setObservations] = useState('');

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const handleTakePicture = async () => {
    const image = await ImagePicker.launchCameraAsync();
    if (!image.canceled) {
      setImages([...images, image]);
    }
  }

  const handleLoadPicture = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImages([result.assets[0]])
    }
  }

  const handleSave = () => {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists observations (id integer primary key not null, date text, location text, images text, observations text);'
      );
      tx.executeSql(
        'insert into observations (date, location, images, observations) values (?, ?, ?, ?)',
        [date, location.coords, JSON.stringify(images), observations]
      );
    }, null, null);
    console.log([date, location.coords.longitude, location.coords.latitude, JSON.stringify(images), observations])
  }
  function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage !== null
      ? { uri: selectedImage }
      : placeholderImageSource;

    return <Image source={imageSource} style={{height: 200, width: 200}} />;
  }

  return (
    <View>
      <Text>Date:</Text>
      <TextInput value={date} onChangeText={text => setDate(text)} />

      <Text>Location:</Text>
      {location ? (
        <Text>{location.coords.latitude}, {location.coords.longitude}</Text>
      ) : (
        <Text>Loading...</Text>
      )}

      <Text>Picture:</Text>
      {images.length > 0 && images.map((image, index) => {
        console.log(image.uri)
        return (
        <ImageViewer key={index} source={{ uri: image.uri }} />
      )})}
      <Button title="Take Picture" onPress={handleTakePicture} />
      <Button title="Load Picture" onPress={handleLoadPicture} />

      <Text>Observations:</Text>
      <TextInput value={observations} onChangeText={text => setObservations(text)} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

export default ReportSightingScreen;