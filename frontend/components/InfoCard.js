import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Button } from "react-native";
import { Button } from "@rneui/themed";
import { HStack } from "react-native-flex-layout";
import { Iconify } from "react-native-iconify";

function InfoCard({ data, handleButtonPress, handleXPress }) {
	return (
		<View style={styles.card}>
      <View style={styles.headerContainer}>
        <View style={{flex: 1}}></View>
        <View style={styles.exitButtonContainer}>
          <Button onPress={handleXPress} buttonStyle={styles.exitButton}>
            <Iconify icon="mdi:close" size={18}  color="#808080" />
          </Button>
        </View>
      </View>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{data.name || "Name"}</Text>

				<View style={styles.infoBox}>
					<Text style={styles.header}>{"Address"}</Text>
					<Text style={styles.details}>
						{data.address_line1 + ", " + data.city + ", " + data.state ||
							"Address"}
					</Text>
				</View>

				{data.description && (<View style={styles.infoBox}>
					<Text style={styles.header}>{"Description"}</Text>
					<Text style={styles.details}>{data.description}</Text>
				</View>)}
				<View style={styles.buttonContainer}>
					<HStack spacing={8} justifyContent="center">
						<Button
							icon={
								<View style={styles.iconView}>
									<Iconify icon="mdi:circle" size={24} color="#FFFFFF" />
									<Iconify
										icon="mdi:walk"
										size={14}
										color="#4285F4"
										style={{ position: "absolute" }}
									/>
								</View>
							}
							buttonStyle={[
								styles.button,
								{
									backgroundColor: "#4285F4",
									width: 156,
									justifyContent: "center",
								},
							]}
							title={"Walk"} // add time
							onPress={() =>
								handleButtonPress(true, data.latitude, data.longitude)
							}
						></Button>
						<Button
							icon={
								<View style={styles.iconView}>
									<Iconify icon="mdi:circle" size={24} color="#FFFFFF" />
									<Iconify
										icon="mdi:car-outline"
										size={14}
										color="#4285F4"
										style={{ position: "absolute" }}
									/>
								</View>
							}
							buttonStyle={[
								styles.button,
								{
									backgroundColor: "#4285F4",
									width: 156,
									justifyContent: "center",
								},
							]}
							title={"Drive"} // add time
							onPress={() =>
								handleButtonPress(false, data.latitude, data.longitude)
							}
						></Button>
					</HStack>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		padding: 16,
		backgroundColor: "white",
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.2,
		shadowRadius: 10,
		flexWrap: 'wrap', 
		minHeight: 100, 
		maxHeight: 500, 
	  },
	infoContainer: {
	  flex: 1,
	},
	infoBox: {
	  marginBottom: 10,
	  paddingBottom: 10,
	  borderBottomWidth: 1,
	  borderBottomColor: "#EBEBEB",
	},
	title: {
	  fontSize: 24,
	  fontWeight: "bold",
	  color: "#1E1E1E",
	  marginBottom: 10,
	},
	header: {
	  color: "#9D9D9D",
	  fontSize: 14,
	  marginBottom: 4,
	},
	details: {
	  color: "#343434",
	  fontSize: 16,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 2,
	  },
	  exitButtonContainer: {
		alignSelf: 'flex-end',
	  },
	  exitButton: {
		backgroundColor: "#FFFFFF",
		width: 24,
		height: 24,
		borderRadius: 18,
		alignItems: "center",
		justifyContent: "center",
	  },
	  buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 2,
	  },
	  button: {
		flex: 1,
		height: 44, 
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center', 
		flexDirection: 'row', 
		margin: 8, 
	  },
	  iconView: {
		alignItems: 'center', 
		justifyContent: 'center',  
		width: 24,
		height: 24,
		marginRight: 12,
	  },
  });
  

export default InfoCard;
