import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "20%"
            }}>
                HomeScreen
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack')}
                style={{
                    backgroundColor: 'purple',
                    padding: 10,
                    marginTop: '20%',
                    width: '60%',
                    alignSelf: 'center',
                    borderRadius: 15
                }}
            >
                <Text
                    style={{
                        fontSize: 10,
                        textAlign: 'center',
                        color: 'white'
                    }}
                >Go to stack2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;