import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeperator from '../components/Seperators/ListItemSeperator';
import TitleSeperator from '../components/Seperators/TitleSeperator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import { TouchableHighlight } from 'react-native';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "History",
        icon: {
            name: "history",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
    {
        title: "Settings",
        icon: {
            name: "cog-outline",
            backgroundColor: colors.mediumGray,
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.profileInfoContainer} >
                <ListItem
                    title="Edward Teach"
                    subTitle="edteach@pirates.com"
                    image={require("../assets/images/defaultIcon.jpg")}
                    ItemSeparatorComponent={TitleSeperator}
                />
            </View>
                <GestureHandlerRootView>
                    <View style={styles.listContainer}>
                        <View>

                                <FlatList 
                                    data={menuItems}
                                    keyExtractor={menuItem => menuItems.title}
                                    ItemSeparatorComponent={ListItemSeperator}
                                    renderItem={({ item }) => (
                                        <TouchableHighlight
                                        activeOpacity={0.6}
                                        underlayColor="#DDDDDD"
                                        
                                        >
                                            <ListItem 
                                                title={item.title}
                                                IconComponent={
                                                    <Icon
                                                        name={item.icon.name}
                                                        backgroundColor={item.icon.backgroundColor} 
                                                    />
                                                }
                                            />
                                        </TouchableHighlight>
                                    )}
                                />                      
                            
                        </View>
                        <View style={styles.logoutContainer}>
                            <ListItem 
                                title="Log Out"
                                IconComponent={<Icon name="logout" backgroundColor={colors.tertiary} />}
                            />
                        </View>
                    </View>
            </GestureHandlerRootView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGray,
    },
    container: {
        marginVertical: 20,
    },
    icon: {
        justifyContent: "center",
    },
    logoutContainer: {
        paddingTop: 200,
        justifyContent: "flex-end",
    },
    listContainer: {
        marginLeft: 10,
    },
    profileInfoContainer: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 2,
    }
})

export default AccountScreen;