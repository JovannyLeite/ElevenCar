import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import SettingsSvg from "../../../img/icons/settings.svg"

import styles from "./style"

const IconSize = 36;

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxSettings}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <SettingsSvg style={styles.iconSettings}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.boxText} onPress={() => setGo()}>
                <View style={styles.box}>
                    <Text style={styles.status}>Status: Ativo</Text>
                    <Text style={styles.status}>Conectado em: 192.168.0.101</Text>
                </View>
                <View style={styles.boxDirection}>
                    <Text style={styles.direction}>Frente</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.circleButtonContainer}>
                <View style={styles.circleButton}>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <FontAwesome name="chevron-up" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <FontAwesome name="chevron-left" size={IconSize} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <Entypo name="sound" size={IconSize} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <FontAwesome name="chevron-right" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <FontAwesome name="chevron-down" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}