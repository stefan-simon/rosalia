import { FlatList } from 'react-native';
import HomeGridTile from '../components/HomeGridTile';

import { HOME_SCREENS } from '../data/screens';

function HomeScreen({ navigation }) {
  function renderHomeItem(itemData) {
    function pressHandler() {
      navigation.navigate(itemData.item.screen);
    }

    return (
      <HomeGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={HOME_SCREENS}
      keyExtractor={(item) => item.name}
      renderItem={renderHomeItem}
      numColumns={2}
    />
  );
}

export default HomeScreen;
