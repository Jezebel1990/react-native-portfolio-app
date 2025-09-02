import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { GradientLayout } from '../../components/GradientLayout/GradientLayout';
import { Profile } from '../../components/Profile/Profile';
import  styles  from './SkillScreenStyle'

export default function SkillScreen(){

    const skills = [
    { name: "CSS", level: 5 },
    { name: "HTML", level: 5 },
    { name: "React", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Node.js", level: 3 },
  ];

 const openWhatsApp = () => {
    const phoneNumber = "5511957333990"; 
    const message = "Olá Jezebel! Gostaria de falar com você.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  }; 

return (
   <GradientLayout>
   <View style={styles.profileContainer}>
    <Profile/>

<Text style={styles.title}>Minhas Habilidades</Text>

 {skills.map((skill, index) => (
          <View key={index} style={styles.skillRow}>
            <Text style={styles.skillName}>{skill.name}:</Text>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <FontAwesome
                  key={i}
                  name={i < skill.level ? "star" : "star-o"}
                  size={22}
                  color="#FFD700" 
                  style={styles.star}
                />
              ))}
            </View>
          </View>
        ))}

        {/* Botão do WhatsApp */}
        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Ionicons
            name="logo-whatsapp"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Falar comigo</Text>
        </TouchableOpacity>
      </View>
<StatusBar style="light" />
    </GradientLayout>

);
}