import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import axios from 'axios';

import { connect } from "socket.io-client";

const instance = axios.create({
    baseURL: 'http://192.168.0.103:3333/'
});

import SettingsSvg from "../../../img/icons/settings.svg"

import styles from "./style"

const IconSize = 36;

export default function Home({ navigation }) {
    const [lastAction, setLastAction] = useState('-')
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        try {
            const socket = connect('http://192.168.0.103:3333', {
                reconnectionDelayMax: 10000,
                query: {
                  "name": "Controle - App"
                }
            });
            setSocket(socket)

            return () => { socket.disconnect() }
        } catch (error) {
            console.log(error)
        }
    }, [])

    async function handleSendAction(event) {
        console.log(event)
        setLastAction(event.action)

        const action = {
            event: `${event.event} ${event.action}`,
            type: "HTTP/POST",
            emitter: socket.id,
            client: {
              IP: "192.168.0.3",
              name: "Aplicativo"
            },
            to: {
              IP: "192.168.0.8",
              name: "API"
            },
            value: JSON.stringify(event)
        }

        try {
            await instance.post('/action', action)
            // socket.emit('log', action)
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