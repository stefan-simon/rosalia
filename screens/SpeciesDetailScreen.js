import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
import { SPECIES, SPECIES_IMAGES } from '../data/species';

function SpeciesDetailScreen({ route, navigation }) {
  const speciesId = route.params.speciesId;

  const selectedSpecies = SPECIES.find((species) => species.id === speciesId);

  function headerButtonPressHandler() {
    navigation.navigate('ReportSighting', {
      speciesId: speciesId,
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="add"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  const SpeciesDescription = ({description}) => {
    const descriptionItems = description.map((item, index) => {
      console.log(item)
      let child = <></>;
      if (item.type === 'text') {
        child = <Text key={index} style={styles.detailText}>{item.content}</Text>;
      }
      if (item.type === 'title') {
        child = <Text key={index} style={styles.title}>{item.content}</Text>;
      }
      if(item.type === 'subtitle') {
        child = <Text key={index} style={styles.subtitle}>{item.content}</Text>;
      }
      if (item.type === 'image') {
        const imageUrl = SPECIES_IMAGES[selectedSpecies.id]
        child = <Image key={index} source={imageUrl} style={styles.image} />
      };

      return child;
    });

    return (
      <>
        {descriptionItems}
      </>
    )
  }
  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.rootContainer}>
      <SpeciesDescription description={selectedSpecies.description} />
    </View>
    </ScrollView>
  );
}

export default SpeciesDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#022c4a',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'left',
    color: '#022c4a',
  },
  detailText: {
    color: '#022c4a',
    textAlign: 'justify',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8
  }
});
