import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Button } from "react-native";
import { Button } from "@rneui/themed";
import { HStack } from "react-native-flex-layout";
import { Iconify } from "react-native-iconify";

function InfoCard({ data, handleButtonPress, handleXPress }) {
	return (
		<View style={styles.card}>
			<Button onPress={handleXPress} buttonStyle={styles.exitButton}>
				X
			</Button>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{data.name || "Name"}</Text>

				<View style={styles.infoBox}>
					<Text style={styles.header}>{"Address"}</Text>
					<Text style={styles.details}>
						{data.address_line1 + ", " + data.city + ", " + data.state ||
							"Address"}
					</Text>
				</View>

				{/* <View style={styles.infoBox}>
          <Text style={styles.header}>{"Description"}</Text>
          <Text style={styles.details}>{"Description here"}</Text>
        </View> */}
				<View style={styles.buttonContainer}>
					{/* <Button
            buttonStyle={[
              styles.button,
              { backgroundColor: "#EA4335", width: 320 },
            ]}
            title={"Not Available"}
          ></Button> */}
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
									justifyContent: "left",
								},
							]}
							title={"Walk"} // add time
							onPress={() =>
								handleButtonPress(
									true,
									data.latitude,
									data.longitude
								)
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
									justifyContent: "left",
								},
							]}
							title={"Drive"} // add time
							onPress={() =>
								handleButtonPress(
									false,
									data.latitude,
									data.longitude
								)
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
		padding: 20,
		height: 350,
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	infoContainer: {
		width: 337,
		height: 292,
	},
	infoBox: {
		width: 335,
		height: 65,
		paddingBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: "#EBEBEB",
		justifyContent: "flex-end",
		marginTop: 5,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#1E1E1E",
		height: 42,
	},
	header: {
		color: "#9D9D9D",
		fontSize: 12,
		marginBottom: 20,
	},
	details: {
		color: "#343434",
		fontSize: 12,
	},
	buttonContainer: {
		width: 320,
		height: 95,
		justifyContent: "center",
		alignSelf: "center",
		marginTop: 20,
	},
	button: {
		borderRadius: 6,
		height: 41,
		marginTop: 10,
	},
	iconView: {
		alignItems: "center",
		justifyContent: "center",
		width: 24,
		height: 24,
		marginRight: 4,
	},
	exitButton: {
		backgroundColor: "#4285F4",
		width: 36,
		height: 36,
		borderRadius: 20,
	},
});

export default InfoCard;
