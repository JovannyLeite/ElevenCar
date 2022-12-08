import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useConfig } from "../../contexts/Config";

import styles from "./style"

const IconSize = 36;

export default function Start() {
    const [carIpValue, setCarIpValue] = useState("")
    const [serverIpValue, setServerIpValue] = useState("")
    const { setServerIp, setCarIp } = useConfig()

    const navigation = useNavigation()

    async function handleSubmit() {
        setServerIp(serverIpValue)
        setCarIp(carIpValue)

        await AsyncStorage.setItem('@elevencar/serverIp', serverIpValue)
        await AsyncStorage.setItem('@elevencar/carIp', carIpValue)

        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <FontAwesome5 name="car" color="#FFFFFF" size={64} />
            <TextInput
                style={styles.input}
                value={carIpValue}
                onChangeText={setCarIpValue}
                placeholder="IP do Carrinho (Ex: 192.168.0.1:3333)"
            />
            <TextInput
                style={styles.input}
                value={serverIpValue}
                onChangeText={setServerIpValue}
                placeholder="IP da API (Ex: 192.168.0.1:3333)"
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonOptions}>
                <View style={styles.boxOptions}>
                    <Text style={styles.options}>Enviar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}