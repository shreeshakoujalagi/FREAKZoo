import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, theme } from '../../theme/colors';

export default function AvatarScreen() {
    const navigation = useNavigation<any>();
    const [selectedAvatar, setSelectedAvatar] = useState('https://picsum.photos/200');

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Neon yourself.</Text>

            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedAvatar }} style={styles.avatar} />
                <View style={styles.glow} />
            </View>

            <TouchableOpacity
                style={styles.doneButton}
                onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}
            >
                <Text style={styles.buttonText}>Enter FREAKZoo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    headline: {
        fontSize: 28,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
    },
    imageContainer: {
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: colors.primaryGradientEnd,
        zIndex: 2,
    },
    glow: {
        position: 'absolute',
        width: 170,
        height: 170,
        borderRadius: 85,
        backgroundColor: colors.primaryGradientStart,
        opacity: 0.5,
        zIndex: 1,
        shadowColor: colors.primaryGradientStart,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 20,
    },
    doneButton: {
        backgroundColor: colors.success,
        paddingVertical: theme.spacing.m,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.radius.round,
    },
    buttonText: {
        color: colors.surface,
        fontWeight: 'bold',
        fontFamily: theme.font.medium,
    },
});
