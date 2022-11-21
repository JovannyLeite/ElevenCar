import React from "react";
import { View, Text, TouchableOpacity } from "react-native"

import SettingsSvg from "../../../img/icons/settings.svg"

import styles from "./style"


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.frontcontainer}>
                    <View>
                        <View style={styles.boxSettings}>
                            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                            <SettingsSvg style={styles.iconSettings}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setGo()}>
                            <View style={styles.boxText}>
                                <View style={styles.box}>
                                    <Text style={styles.status}>Status: Ativo</Text>
                                    <Text style={styles.status}>Conectado em: 192.168.0.101</Text>
                                </View>
                                <View style={styles.boxDirection}>
                                    <Text style={styles.direction}>Frente</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}