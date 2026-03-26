import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming
} from 'react-native-reanimated';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface ZooLineChartProps {
    data: number[];
    color: string;
}

const ZooLineChart: React.FC<ZooLineChartProps> = ({ data, color }) => {
    const chartHeight = 60;
    const chartWidth = width - 80;
    const step = chartWidth / (data.length - 1);
    const max = Math.max(...data);

    const points = data.map((val, i) => {
        const x = i * step;
        const y = chartHeight - (val / max) * chartHeight;
        return { x, y };
    });

    const d = points.reduce((acc, point, i) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        return `${acc} L ${point.x} ${point.y}`;
    }, '');

    const areaD = `${d} L ${points[points.length - 1].x} ${chartHeight} L 0 ${chartHeight} Z`;

    return (
        <View style={styles.container}>
            <Svg width={chartWidth} height={chartHeight}>
                <Defs>
                    <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <Stop offset="0" stopColor={color} stopOpacity="0.3" />
                        <Stop offset="1" stopColor={color} stopOpacity="0" />
                    </LinearGradient>
                </Defs>
                <Path
                    d={areaD}
                    fill="url(#gradient)"
                />
                <Path
                    d={d}
                    stroke={color}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginVertical: 10,
    },
});

export default ZooLineChart;
