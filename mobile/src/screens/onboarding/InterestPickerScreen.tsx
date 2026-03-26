import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, theme } from '../../theme/colors';

export default function InterestPickerScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick your vibe.</Text>
            {['Tech', 'Music', 'Art'].map(item => (
                <TouchableOpacity key={item} style={styles.option}>
                    <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Avatar')}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.xl,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        marginBottom: theme.spacing.l,
    },
    option: {
        padding: theme.spacing.m,
        borderWidth: 1,
        borderColor: colors.mint,
        borderRadius: theme.radius.l,
        marginBottom: theme.spacing.s,
    },
    optionText: {
        color: colors.mint,
        fontFamily: theme.font.regular,
    },
    button: {
        marginTop: theme.spacing.xl,
        backgroundColor: colors.accentPink,
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
