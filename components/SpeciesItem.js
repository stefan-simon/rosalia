import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SpeciesItem({
  id,
  title,
  imageUrl
}) {
  const navigation = useNavigation();

  function selectSpeciesItemHandler() {
    navigation.navigate('SpeciesDetail', {
      speciesId: id,
    });
  }

  return (
    <View style={styles.speciesItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectSpeciesItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={imageUrl} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default SpeciesItem;

const styles = StyleSheet.create({
  speciesItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
