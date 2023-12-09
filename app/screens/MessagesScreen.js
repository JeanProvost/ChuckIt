import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/Seperators/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/images/defaultIcon.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/images/defaultIcon.jpg')
    },
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen style={styles.screen}> 
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    /> 
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'T1',
                            description: 'D1',
                            image: require('../assets/images/defaultIcon.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default MessagesScreen;