import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, theme } from '../../theme/colors';
import { MOCK_USERS } from '../../mock/data';
import { BadgeCheck, Flame } from 'lucide-react-native';
import ZooDashboardCard from '../../components/ZooDashboardCard';

export default function ProfileScreen() {
    const user = MOCK_USERS[0];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <LinearGradient
                    colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                    style={styles.avatarBorder}
                >
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                </LinearGradient>

                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>{user.username}</Text>

                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Flame size={20} color={colors.accentPink} />
                        <Text style={styles.statNumber}>{user.streak} days</Text>
                        <Text style={styles.statLabel}>Privacy Streak</Text>
                    </View>
                    <View style={styles.statItem}>
                        <BadgeCheck size={20} color={colors.mint} />
                        <Text style={styles.statNumber}>Verified</Text>
                        <Text style={styles.statLabel}>Authentic</Text>
                    </View>
                </View>

                <Text style={styles.bio}>{user.bio}</Text>
            </View>

            <ZooDashboardCard />

            <Text style={styles.sectionTitle}>Vibe Badges</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesScroll}>
                {user.badges.map((badge, index) => (
                    <View key={index} style={styles.badgeCard}>
                        <Text style={styles.badgeText}>{badge.toUpperCase()}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.highlightsGrid}>
                {[1, 2, 3].map((i) => (
                    <View key={i} style={styles.highlightPlaceholder}>
                        <LinearGradient colors={[colors.surface, '#000']} style={styles.highlightGradient} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    header: {
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
    },
    avatarBorder: {
        padding: 3,
        borderRadius: 60,
        marginBottom: theme.spacing.m,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 4,
        borderColor: colors.background,
    },
    name: {
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
    },
    username: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: theme.spacing.m,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: theme.spacing.m,
    },
    statItem: {
        alignItems: 'center',
        backgroundColor: colors.surface,
        padding: theme.spacing.m,
        borderRadius: theme.radius.m,
        minWidth: 100,
    },
    statNumber: {
        color: colors.textPrimary,
        fontSize: 16,
        fontFamily: theme.font.bold,
        marginTop: 4,
    },
    statLabel: {
        color: colors.textSecondary,
        fontSize: 10,
    },
    bio: {
        color: colors.textPrimary,
        textAlign: 'center',
        paddingHorizontal: theme.spacing.xl,
        lineHeight: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        marginLeft: theme.spacing.l,
        marginBottom: theme.spacing.m,
    },
    badgesScroll: {
        paddingLeft: theme.spacing.l,
        marginBottom: theme.spacing.xl,
    },
    badgeCard: {
        backgroundColor: 'rgba(0, 255, 179, 0.1)',
        paddingHorizontal: theme.spacing.l,
        paddingVertical: theme.spacing.s,
        borderRadius: theme.radius.round,
        marginRight: theme.spacing.m,
        borderWidth: 1,
        borderColor: colors.mint,
    },
    badgeText: {
        color: colors.mint,
        fontWeight: 'bold',
        fontSize: 12,
    },
    highlightsGrid: {
        flexDirection: 'row',
        paddingHorizontal: theme.spacing.l,
        justifyContent: 'space-between',
    },
    highlightPlaceholder: {
        width: 100,
        height: 150,
        borderRadius: theme.radius.m,
        backgroundColor: colors.surface,
        overflow: 'hidden',
    },
    highlightGradient: {
        flex: 1,
        opacity: 0.5,
    },
});
