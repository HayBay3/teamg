import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#F4B266",
    borderRadius: 5,
    width: "16%",
    height: "5%",
    alignContent: "center",
    marginTop: "1%",
    padding: "0.5%",
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    width: "25%",
    height: "15%",
    alignContent: "center",
    marginTop: "5%",
    padding: "0.5%",
  },

  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "top",
    fontFamily: "Chilanka_400Regular",
  },
  chartTitle: {
    fontSize: 25,
    paddingVertical: 3,
    fontFamily: "Chilanka_400Regular",
    color: "navy",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  graph: {
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
    marginTop: "-18%",
    marginBottom: "-10%",
    position: "absolute",
  },
  progressContainer: {
    flex: 1,
    marginLeft: "35%",
    marginTop: "-3%",
    padding: "5%",
    width: "40%",
  },
  subText: {
    fontSize: 23,
    paddingVertical: 3,
    fontFamily: "Chilanka_400Regular",
    color: "white",
  },
  text: {
    fontSize: 25,
    paddingVertical: 3,
    fontFamily: "Chilanka_400Regular",
  },
  thumbnail: {
    width: "15%",
    height: "50%",
    resizeMode: "contain",
  },
  backButtonText: {
    color: "#8FE09B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#8FE09B",
    borderRadius: 15,
    padding: 1,
    // margin: -45,
    marginLeft: 50,
    marginTop: 10,
    // marginBottom: 70,
    width: 110,
    height: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
