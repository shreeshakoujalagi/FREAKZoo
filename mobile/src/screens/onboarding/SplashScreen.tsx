import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
    Easing
} from 'react-native-reanimated';
import { colors, theme } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

export default function SplashScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.8);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 1000 });
        scale.value = withRepeat(
            withSequence(
                withTiming(1, { duration: 1000, easing: Easing.ease }),
                withTiming(0.95, { duration: 1000, easing: Easing.ease })
            ),
            -1,
            true
        );

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <Animated.View style={[styles.content, animatedStyle]}>
                <Text style={styles.title}>FREAKZoo</Text>
                <Text style={styles.subtitle}>Privacy. Ephemeral. Real.</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.1, // Subtle gradient background
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        textShadowColor: colors.accentPink,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    subtitle: {
        marginTop: theme.spacing.m,
        fontSize: 18,
        color: colors.mint,
        fontFamily: theme.font.medium,
        letterSpacing: 1.5,
    },
});
