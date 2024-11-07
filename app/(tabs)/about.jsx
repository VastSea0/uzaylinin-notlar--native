import React from "react";
import { Text, View, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function About() {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: 40,
                alignItems: "center",
                backgroundColor: "#121928",
                height: "100%",
            }}
        >
            <Text
                style={{
                    color: "#d3439f",
                    fontSize: 24,
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: 15,
                }}
            >
                Uzaylının Notları
            </Text>
            <Text
                style={{
                    color: "#c4c4c4",
                    fontSize: 16,
                    textAlign: "center",
                    paddingHorizontal: 20,
                    lineHeight: 24,
                    marginBottom: 10,
                }}
            >
                Özgür değilsin henüz, hala özgürlüğü <Text style={{ color: "#d3439f" }}>a r ı y o r s u n</Text>.
            </Text>
            <Text
                style={{
                    color: "#c4c4c4",
                    fontSize: 16,
                    textAlign: "center",
                    paddingHorizontal: 20,
                    lineHeight: 24,
                    marginBottom: 30,
                }}
            >
                Uykusuz ve aşırı uyanık kılmış arayışın seni.
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://github.com/VastSea0")}
                    style={{ marginHorizontal: 10 }}
                >
                    <Icon name="github" size={28} color="#c4c4c4" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL("mailto:vastseaoffical0@outlook.com")}
                    style={{ marginHorizontal: 10 }}
                >
                    <Icon name="envelope" size={28} color="#c4c4c4" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL("https://instagram.com/crusttaceans")}
                    style={{ marginHorizontal: 10 }}
                >
                    <Icon name="instagram" size={28} color="#c4c4c4" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ 
                    marginTop: 20,
                    fontSize: 20,
                    textAlign: "center",
                    color: "#d3439f" 
                }}>
                    Developed on React Native
                </Text>
                <Text
                    style={{
                        color: "#c4c4c4",
                        fontSize: 16,
                        textAlign: "center",
                        paddingHorizontal: 20,
                        lineHeight: 24,
                        marginTop: 20,
                    }}
                >
                    © 2024 Egehan KAHRAMAN - Created With ❤️
                </Text>
            </View>
        </View>
    );
}