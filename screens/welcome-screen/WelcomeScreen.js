import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';

const WelcomeScreen = () => {

    //theme
    const theme = useTheme();
    const styles = createStyles(theme);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>hello</Text>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    }
});
