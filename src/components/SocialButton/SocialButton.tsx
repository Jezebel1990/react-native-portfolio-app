import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { styles } from './SocialButtonStyle';

interface SocialButtonProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
  color: string;
}

export function SocialButton({ title, icon, url, color }: SocialButtonProps) {
  const handlePress = async (event: GestureResponderEvent) => {
    event.preventDefault();
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Não foi possível abrir o link:", url);
    }
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={handlePress}>
      <Ionicons name={icon} size={24} color="#fff" style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}