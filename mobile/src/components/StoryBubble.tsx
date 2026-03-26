import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
    interpolateColor
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';

interface StoryBubbleProps {
    user?: any;
    isAddButton?: boolean;
    isNew?: boolean;
    onPress?: () => void;
    onLongPress?: () => void;
}

const StoryBubble: React.FC<StoryBubbleProps> = ({
    user,
    isAddButton,
    isNew,
    onPress,
    onLongPress
}) => {
    const pulse = useSharedValue(1);

    useEffect(() => {
        if (isNew) {
            pulse.value = withRepeat(
                withSequence(
                    withTiming(1.1, { duration: 1000 }),
                    withTiming(1, { duration: 1000 })
                ),
                -1
            );
        }
    }, [isNew]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: pulse.value }],
        borderColor: isNew ? colors.primaryGradientStart : colors.surfaceHighlight,
    }));

    if (isAddButton) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.addIconContainer}>
                        <LinearGradient
                            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                            style={styles.addIconGradient}
                        >
                            <Plus color={colors.white} size={24} />
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <Text style={styles.username}>Add Vibe</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                delayLongPress={300}
            >
                <Animated.View style={[styles.bubbleWrapper, animatedStyle]}>
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                    {isNew && (
                        <View style={styles.newIndicator}>
                            <View style={styles.innerIndicator} />
                        </View>
                    )}
                </Animated.View>
            </Pressable>
            <Text style={styles.username} numberOfLines={1}>
                {user.username.split('@')[1]}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 8,
        width: 70,
    },
    bubbleWrapper: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    addIconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        padding: 2,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.textMuted,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIconGradient: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    username: {
        color: colors.textSecondary,
        fontSize: 10,
        marginTop: 6,
        fontFamily: theme.font.medium,
    },
    newIndicator: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.mint,
    },
});

export default StoryBubble;
