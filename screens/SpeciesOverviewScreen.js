import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SpeciesItem from '../components/SpeciesItem';
import { SPECIES, SPECIES_IMAGES } from '../data/species';

function SpeciesOverviewScreen({ route, navigation }) {
  const displayedSpecies = SPECIES
  // const catId = route.params.categoryId;


  // useLayoutEffect(() => {
  //   const categoryTitle = CATEGORIES.find(
  //     (category) => category.id === catId
  //   ).title;

  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [catId, navigation]);

  function renderSpeciesItem(itemData) {
    const item = itemData.item;
    const imageUrl = SPECIES_IMAGES[item.id]

    const speciesItemProps = {
      id: item.id,
      title: item.name,
      imageUrl: imageUrl
    };
    return <SpeciesItem {...speciesItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedSpecies}
        keyExtractor={(item) => item.id}
        renderItem={renderSpeciesItem}
      />
    </View>
  );
}

export default SpeciesOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
