import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Producto} from '../';

const Baño = (props) => {
  const {profilt, navigation, handleLoadMore} = props;

  return (
    <View>
      {profilt ? (
        <FlatList
          keyExtractor={(profilt) => profilt.id}
          data={profilt}
          numColumns={2}
          renderItem={(producto) => (
            <Producto
              producto={producto}
              navigation={navigation}
              handleLoadMore={handleLoadMore}
            />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
        />
      ) : (
        <View>
          <Text>Seleccione una categoria</Text>
        </View>
      )}
    </View>
  );
};

export default Baño;
