import { AppRegistry } from "react-native";
import React from "react";
import { SafeAreaView, View, Flatlist, Stylesheet, Text, StatusBar } from "react-native";
import { styles } from "ansi-colors";

const DATA = [
    {
        id: '1',
        title: 'Toyota',
    },
    {
        id: '2',
        title: 'Mazda',
    },
    {
        id: '3',
        title: 'Mitsubishi',
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text> 
    </View>
);

const App = () => {
    consrenderItem =({item}) => (
        <item title={item.title}></item>
    );

    return(
        <SafeAreaView style={styles.container}>
            <Flatlist>
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            </Flatlist>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    title: {
    fontSize: 32,
    },
    });
   AppRegistry.registerComponent("cars", () => App);