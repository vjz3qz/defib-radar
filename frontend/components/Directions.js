import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Iconify } from "react-native-iconify";
import RenderHTML from "react-native-render-html";

const Directions = ({ directions, handleXPress }) => {
  const [directionIndex, setDirectionIndex] = useState(0);
  const window = useWindowDimensions();
  const contentWidth = window.width;

  const handleNextClick = () => {
    setDirectionIndex((prevIndex) => prevIndex + 1);
  };

  if (!directions || directions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading directions...</Text>
      </View>
    );
  } else if (directionIndex < directions.length) {
    const currentDirection = directions[directionIndex];

	return (
		<View style={styles.mainContainer}>
		{exitButton(handleXPress)}
		  <View style={styles.container}>
			<View style={styles.directionItem}>
			  <View style={styles.maneuverContainer}>
				<Iconify icon="mdi:turn-left" size={24} color="#000" />
			  </View>
			  <View style={styles.instructionContainer}>
				<RenderHTML
				  contentWidth={contentWidth}
				  source={{ html: currentDirection.instruction }}
				  containerStyle={{ flex: 1 }}
				/>
			  </View>
			  <Text style={styles.plainText}>Distance: {currentDirection.distance}</Text>
			</View>
			<View style={styles.nextButtonContainer}>
			  <TouchableOpacity onPress={handleNextClick} style={styles.nextButton}>
				<Text style={styles.nextButtonText}>Next</Text>
			  </TouchableOpacity>
			</View>
		  </View>
		</View>
	  );
  } else {
    return (
      <View style={styles.mainContainer}>
	  {exitButton(handleXPress)}
	  <View style={styles.container}>
	  <Text style={styles.plainText}>You've reached your destination</Text>

      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
	mainContainer: {
	  position: "absolute",
	  top: 50,
	  left: 0,
	  right: 0,
	  zIndex: 1,
	  backgroundColor: "white",
	  borderRadius: 8, // Rounded corners
	  shadowColor: "#000", // Shadow
	  shadowOffset: { width: 0, height: 1 },
	  shadowOpacity: 0.3,
	  shadowRadius: 2,
	  elevation: 5,
	},
	container: {
	  padding: 15,
	},
  loadingContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  directionItem: {
    flex: 1,
    alignItems: 'center',  // Center vertically
    justifyContent: 'center',  // Center horizontally
    marginBottom: 10,
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",  // Center horizontally
    flexWrap: 'wrap',
  },
  plainText: {
    textAlign: 'center',  // Center the text
  },
  maneuverContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  maneuver: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  exitButtonContainer: {
	alignSelf: 'flex-end',
	marginRight: 10, 
	marginTop: 10, 
  },
  exitButton: {
	backgroundColor: "#FFFFFF",
    width: 30,
    height: 30,
    borderRadius: 15,
	alignItems: "center",
	justifyContent: "center",
  },
  nextButtonContainer: {
    alignSelf: "flex-end",
  },
  nextButton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Directions;
function exitButton(handleXPress) {
	return <View style={styles.exitButtonContainer}>
		<TouchableOpacity onPress={handleXPress} style={styles.exitButton}>
			<Iconify icon="mdi:close" size={18} color="#808080" />
		</TouchableOpacity>
	</View>;
}

