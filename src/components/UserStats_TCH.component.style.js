import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#F4B266",
    borderRadius: 5,
    width: "16%",
    height: "5%",
    alignContent: "center",
    marginTop: "1%",
    padding:"0.5%"
  },
  deleteButton:{
    backgroundColor: "#F4B266",
    borderRadius: 5,
    width: "25%",
    height: "10%",
    alignContent: "center",
    marginTop: "1%",
    padding:"0.5%",
  },

  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign:"center",
    textAlignVertical:"top",
    fontFamily: "Chilanka_400Regular",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  graph: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
  },
  person: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    marginLeft: "5%",
    marginTop: "5%",
    position: "absolute",
  },
  progressContainer: {
    flex: 1,
    marginLeft: "35%",
    marginTop: "5%",
    width: "40%",
  },
  text: {
    fontSize: 20,
    paddingVertical: 3,
    fontFamily: "Chilanka_400Regular",
  },
  thumbnail: {
    width: "15%",
    height: "50%",
    resizeMode: "contain",
  },
});
