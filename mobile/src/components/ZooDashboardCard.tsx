import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Zap, Brain, Users, Sparkles, TrendingUp } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';
import ZooMetricRing from './ZooMetricRing';
import ZooLineChart from './ZooLineChart';

const { width } = Dimensions.get('window');

const ZooDashboardCard = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(138, 43, 226, 0.2)', 'rgba(0, 229, 255, 0.1)']}
                style={styles.card}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Your ZOO</Text>
                        <Text style={styles.subtitle}>Personal Creative Ecosystem</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Zap color={colors.primaryGradientStart} size={20} fill={colors.primaryGradientStart} />
                        <Text style={styles.badgeText}>LION LEVEL</Text>
                    </View>
                </View>

                <View style={styles.metricsRow}>
                    <ZooMetricRing value={82} label="Vibe Energy" color={colors.primaryGradientStart} />
                    <ZooMetricRing value={95} label="Authenticity" color={colors.mint} />
                    <ZooMetricRing value={64} label="Collab" color={colors.primaryGradientEnd} />
                </View>

                <View style={styles.chartSection}>
                    <View style={styles.chartHeader}>
                        <TrendingUp size={16} color={colors.textSecondary} />
                        <Text style={styles.chartTitle}>Community Impact</Text>
                    </View>
                    <ZooLineChart data={[10, 25, 18, 45, 30, 60, 55]} color={colors.primaryGradientEnd} />
                </View>

                <View style={styles.badgesSection}>
                    <Text style={styles.sectionTitle}>Unlocked Badges</Text>
                    <View style={styles.badgesRow}>
                        <View style={[styles.animalBadge, { borderColor: colors.primaryGradientStart }]}>
                            <Zap size={18} color={colors.primaryGradientStart} />
                            <Text style={styles.animalText}>Lion</Text>
                        </View>
                        <View style={[styles.animalBadge, { borderColor: colors.mint }]}>
                            <Brain size={18} color={colors.mint} />
                            <Text style={styles.animalText}>Owl</Text>
                        </View>
                        <View style={[styles.animalBadge, { borderColor: colors.primaryGradientEnd }]}>
                            <Users size={18} color={colors.primaryGradientEnd} />
                            <Text style={styles.animalText}>Wolf</Text>
                        </View>
                        <View style={[styles.animalBadge, { borderColor: colors.accentPink }]}>
                            <Sparkles size={18} color={colors.accentPink} />
                            <Text style={styles.animalText}>Fox</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    card: {
        borderRadius: theme.radius.xl,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        backgroundColor: 'rgba(26, 26, 34, 0.8)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontFamily: theme.font.bold,
    },
    subtitle: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: theme.font.medium,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(138, 43, 226, 0.15)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(138, 43, 226, 0.3)',
    },
    badgeText: {
        color: colors.primaryGradientStart,
        fontSize: 10,
        fontFamily: theme.font.bold,
        marginLeft: 4,
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    chartSection: {
        marginBottom: 24,
    },
    chartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    chartTitle: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: theme.font.bold,
        marginLeft: 8,
        textTransform: 'uppercase',
    },
    badgesSection: {},
    sectionTitle: {
        color: colors.textSecondary,
        fontSize: 11,
        fontFamily: theme.font.bold,
        textTransform: 'uppercase',
        marginBottom: 12,
        letterSpacing: 1,
    },
    badgesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    animalBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
    },
    animalText: {
        color: colors.white,
        fontSize: 10,
        marginTop: 4,
        fontFamily: theme.font.medium,
    },
});

export default ZooDashboardCard;
