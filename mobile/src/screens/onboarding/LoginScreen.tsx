import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { colors, theme } from '../../theme/colors';

export default function LoginScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('InterestPicker')}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: theme.spacing.xl,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 32,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        marginBottom: theme.spacing.xl,
    },
    button: {
        backgroundColor: colors.primaryGradientStart,
        padding: theme.spacing.m,
        borderRadius: theme.radius.m,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontFamily: theme.font.medium,
    },
});
