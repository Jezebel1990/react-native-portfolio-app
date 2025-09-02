import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileContainer:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:60,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
    maxWidth: 400,
  },
  skillName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  starsContainer: {
    flexDirection: "row",
  },
  star: {
    marginHorizontal: 2,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#25D366", // Cor oficial do WhatsApp
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 90,
    width: "100%",
    maxWidth: 400,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff", // Borda branca para destacar no gradiente
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
export default styles