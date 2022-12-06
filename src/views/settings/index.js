import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native"

import { useConfig } from "../../contexts/Config";

import styles from "./style"

export default function Settings() {
    const { isSocketConnected, serverIp, carIp, clients } = useConfig()

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => setGo()}>
                        <View style={styles.boxText}>
                            <View style={styles.box}>
                                <Text style={styles.status}>Ip do Carrinho:</Text>
                            </View>
                            <View style={styles.boxDirection}>
                                <Text style={styles.direction}>{carIp === '' ? '-' : carIp}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGo()}>
                        <View style={styles.boxText}>
                            <View style={styles.box}>
                                <Text style={styles.status}>Ip do Servidor:</Text>
                            </View>
                            <View style={styles.boxDirection}>
                                <Text style={styles.direction}>{serverIp === '' ? '-' : serverIp}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGo()}>
                        <View style={[styles.boxText, !isSocketConnected && { backgroundColor: 'red' }]}>
                            <View style={styles.box}>
                                <Text style={styles.status}>Status Atual:</Text>
                            </View>
                            <View style={styles.boxDirection}>
                                <Text style={styles.direction}>{isSocketConnected ? 'Ativo' : 'Inativo'}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    {clients.map(client => (
                        <TouchableOpacity onPress={() => setGo()}>
                            <View style={[styles.boxText, !client.status === 'Inactive' && { backgroundColor: 'red' }]}>
                                <View style={styles.box}>
                                    <Text style={styles.status}>{client.name}</Text>
                                </View>
                                <View style={styles.boxDirection}>
                                    <Text style={styles.direction}>{client.status === 'Active' ? 'Ativo' : 'Inativo'}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => setGo()}>
                <View style={styles.boxOptions}>
                    
                        <Text style={styles.options}>Cancelar</Text>
                    

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGo()} style={styles.buttomOptions}>
                <View style={styles.boxOptions}>
                    
                        <Text style={styles.options}>Atualizar</Text>
                    

                </View>
            </TouchableOpacity>
        </View>
    );
}