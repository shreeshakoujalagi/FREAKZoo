import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
    withDelay
} from 'react-native-reanimated';
import { colors, theme } from '../theme/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ZooMetricRingProps {
    value: number;
    label: string;
    color: string;
    size?: number;
}

const ZooMetricRing: React.FC<ZooMetricRingProps> = ({
    value,
    label,
    color,
    size = 70
}) => {
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withDelay(500, withTiming(value / 100, { duration: 1500 }));
    }, [value]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: circumference * (1 - progress.value),
    }));

    return (
        <View style={[styles.container, { width: size }]}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    <AnimatedCircle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        animatedProps={animatedProps}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
            <View style={styles.textContainer}>
                <Text style={[styles.value, { color }]}>{value}%</Text>
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 20, // adjust for label
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 12,
        fontFamily: theme.font.bold,
    },
    label: {
        color: colors.textSecondary,
        fontSize: 10,
        marginTop: 8,
        fontFamily: theme.font.medium,
        textAlign: 'center',
    },
});

export default ZooMetricRing;
