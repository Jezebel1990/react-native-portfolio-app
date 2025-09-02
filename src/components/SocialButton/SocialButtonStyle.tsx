import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    marginVertical: 10,
    width: "100%", // Ocupa largura total do container
    maxWidth: 400, // Para evitar botões muito largos em telas grandes
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 2, 
    borderColor: "#fff",
    shadowColor: "#0000001b",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});