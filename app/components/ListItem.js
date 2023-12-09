import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function ListItem({ title, subTitle, image, onPress, renderRightActions, IconComponent }) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.lightGray}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "7%",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "400",
  },
  subTitle: {
    color: colors.mediumGray,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  }
});

export default ListItem;
