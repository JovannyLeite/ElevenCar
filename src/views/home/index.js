import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { useConfig } from "../../contexts/Config";

import SettingsSvg from "../../../img/icons/settings.svg"

import styles from "./style"

const IconSize = 36;

export default function Home({ navigation }) {
    const { handleSendAction, lastAction, isSocketConnected, serverIp } = useConfig()

    return (
        <View style={styles.container}>
            <View style={styles.boxSettings}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <SettingsSvg style={styles.iconSettings}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.boxText, !isSocketConnected && { backgroundColor: 'red' }]} onPress={() => setGo()}>
                <View style={styles.box}>
                    <Text style={styles.status}>Status: {isSocketConnected ? 'Ativo' : 'Inativo'}</Text>
                    <Text style={styles.status}>Conectado em: {serverIp}</Text>
                </View>
                <View style={styles.boxDirection}>
                    <Text style={styles.direction}>{lastAction}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.circleButtonContainer}>
                <View style={styles.circleButton}>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => handleSendAction({
                                event: "press",
                                action: "up"
                            })}
                        >
                            <FontAwesome name="chevron-up" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => handleSendAction({
                                event: "press",
                                action: "left"
                            })}
                        >
                            <FontAwesome name="chevron-left" size={IconSize} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => handleSendAction({
                                event: "press",
                                action: "fon"
                            })}
                        >
                            <Entypo name="sound" size={IconSize} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => handleSendAction({
                                event: "press",
                                action: "right"
                            })}
                        >
                            <FontAwesome name="chevron-right" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circleButtonRow}>
                        <TouchableOpacity
                            style={styles.circleButtonAction}
                            onPress={() => handleSendAction({
                                event: "press",
                                action: "down"
                            })}
                        >
                            <FontAwesome name="chevron-down" size={IconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}