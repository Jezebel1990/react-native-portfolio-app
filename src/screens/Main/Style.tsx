import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    marginTop:60,
  },
  nameProfile: {
    fontSize:22,
    fontWeight: "700",
    marginTop:20,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize:16,
    marginVertical: 10,
    textAlign: "center",
    color: "#f5f2f2",
  },
    buttonsContainer: {
    width: "100%",
    marginTop: 20,
  },
});

export default styles