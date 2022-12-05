import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.103:3333/'
});

import SettingsSvg from "../../../img/icons/settings.svg"

import styles from "./style"

const IconSize = 36;

export default function Home({ navigation }) {
    const [lastAction, setLastAction] = useState('-')

    async function handleSendAction(event) {
        console.log(event)
        setLastAction(event.action)

        try {
            const response = await instance.post('/action', {
                event: `${event.event} ${event.action}`,
                type: "HTTP/POST",
                client: {
                  IP: "192.168.0.3",
                  name: "Aplicativo"
                },
                to: {
                  IP: "192.168.0.8",
                  name: "API"
                },
                value: JSON.stringify(event)
            })

            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

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