import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { viewStyle, textStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#ddd',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 25
	}
};

export { Header };
//export { Header: Header };  //can also be written this way