import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';
import { Plus, Type, Image, Palette, Radio, X } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

const FloatingCreateButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const animation = useSharedValue(0);

    const toggleMenu = () => {
        const toValue = isOpen ? 0 : 1;
        animation.value = withSpring(toValue, {
            damping: 12,
            stiffness: 90,
        });
        setIsOpen(!isOpen);
    };

    const overlayStyle = useAnimatedStyle(() => ({
        opacity: animation.value,
        display: animation.value > 0 ? 'flex' : 'none',
    }));

    const mainBtnStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${animation.value * 45}deg` }],
    }));

    const getActionStyle = (index: number) => {
        return useAnimatedStyle(() => {
            const distance = 80;
            const angle = (index * 45 + 180) * (Math.PI / 180);
            const translateY = interpolate(animation.value, [0, 1], [0, distance * Math.sin(angle)]);
            const translateX = interpolate(animation.value, [0, 1], [0, distance * Math.cos(angle)]);
            const scale = interpolate(animation.value, [0, 1], [0, 1]);

            return {
                transform: [
                    { translateX },
                    { translateY },
                    { scale }
                ],
                opacity: animation.value
            };
        });
    };

    const actions = [
        { icon: <Type size={20} color={colors.white} />, label: 'Vibe', color: '#FF2E93' },
        { icon: <Image size={20} color={colors.white} />, label: 'Drop', color: '#8A2BE2' },
        { icon: <Palette size={20} color={colors.white} />, label: 'Mood', color: '#00E5FF' },
        { icon: <Radio size={20} color={colors.white} />, label: 'Live', color: '#00FFB3' },
    ];

    return (
        <View style={styles.container} pointerEvents="box-none">
            {isOpen && (
                <Pressable style={styles.backdrop} onPress={toggleMenu} />
            )}

            <View style={styles.actionsContainer}>
                {actions.map((action, index) => (
                    <Animated.View key={index} style={[styles.actionBtnWrapper, getActionStyle(index)]}>
                        <TouchableOpacity
                            style={[styles.actionBtn, { backgroundColor: action.color }]}
                            onPress={() => {
                                toggleMenu();
                                // Handle action
                            }}
                        >
                            {action.icon}
                        </TouchableOpacity>
                        <Text style={styles.actionLabel}>{action.label}</Text>
                    </Animated.View>
                ))}

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={toggleMenu}
                    style={styles.mainBtnContainer}
                >
                    <Animated.View style={[styles.mainBtn, mainBtnStyle]}>
                        <LinearGradient
                            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                            style={styles.gradient}
                        >
                            <Plus color={colors.white} size={32} />
                        </LinearGradient>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 24,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    actionsContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBtnContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        ...theme.shadows.glowPurple,
    },
    mainBtn: {
        width: 64,
        height: 64,
        borderRadius: 32,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtnWrapper: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 80,
    },
    actionBtn: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    actionLabel: {
        color: colors.white,
        fontSize: 10,
        marginTop: 4,
        fontFamily: theme.font.medium,
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
});

export default FloatingCreateButton;
