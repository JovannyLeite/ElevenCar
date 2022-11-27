import React from "react";
import { View, Text, TouchableOpacity } from "react-native"


import styles from "./style"


export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => setGo()}>
                    <View style={styles.boxText}>
                        <View style={styles.box}>
                            <Text style={styles.status}>Ip do Carrinho:</Text>
                        </View>
                        <View style={styles.boxDirection}>
                            <Text style={styles.direction}>192.168.0.109</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGo()}>
                    <View style={styles.boxText}>
                        <View style={styles.box}>
                            <Text style={styles.status}>Ip do Servidor:</Text>
                        </View>
                        <View style={styles.boxDirection}>
                            <Text style={styles.direction}>192.168.0.109</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGo()}>
                    <View style={styles.boxText}>
                        <View style={styles.box}>
                            <Text style={styles.status}>Status Atual:</Text>
                        </View>
                        <View style={styles.boxDirection}>
                            <Text style={styles.direction}>Ativo</Text>
                        </View>

                    </View>
                </TouchableOpacity>
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