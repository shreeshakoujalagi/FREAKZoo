import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, theme } from '../../theme/colors';
import { Search } from 'lucide-react-native';
import { INTERESTS } from '../../mock/data';

export default function DiscoverScreen() {
    const [activeMood, setActiveMood] = React.useState('Chill');

    const MOODS = ['Chill', 'Hype', 'Deep', 'Funny', 'WTF'];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Explore</Text>
                <Search color={colors.textPrimary} size={24} />
            </View>

            <Text style={styles.sectionTitle}>What's your vibe?</Text>
            <View style={styles.moodGrid}>
                {MOODS.map(mood => (
                    <TouchableOpacity
                        key={mood}
                        onPress={() => setActiveMood(mood)}
                        style={[
                            styles.moodChip,
                            activeMood === mood && styles.activeMood
                        ]}
                    >
                        <Text style={[
                            styles.moodText,
                            activeMood === mood && styles.activeMoodText
                        ]}>{mood}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Trending Categories</Text>
            <FlatList
                data={INTERESTS}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryCard}>
                        <LinearGradient
                            colors={[colors.surface, '#2A2A35']}
                            style={styles.cardGradient}
                        >
                            <Text style={styles.categoryLabel}>{item.label}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
                style={styles.grid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing.l,
        marginBottom: theme.spacing.l,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
    },
    sectionTitle: {
        fontSize: 18,
        color: colors.textSecondary,
        fontFamily: theme.font.medium,
        marginLeft: theme.spacing.l,
        marginBottom: theme.spacing.m,
    },
    moodGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: theme.spacing.l,
        marginBottom: theme.spacing.xl,
    },
    moodChip: {
        paddingHorizontal: theme.spacing.l,
        paddingVertical: theme.spacing.s,
        borderRadius: theme.radius.round,
        borderWidth: 1,
        borderColor: colors.surface,
        marginRight: theme.spacing.s,
        marginBottom: theme.spacing.s,
    },
    activeMood: {
        backgroundColor: colors.primaryGradientStart,
        borderColor: colors.primaryGradientStart,
        shadowColor: colors.primaryGradientStart,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    moodText: {
        color: colors.textSecondary,
        fontFamily: theme.font.medium,
    },
    activeMoodText: {
        color: colors.textPrimary,
        fontWeight: 'bold',
    },
    grid: {
        paddingHorizontal: theme.spacing.m,
    },
    categoryCard: {
        flex: 1,
        margin: theme.spacing.s,
        height: 100,
        borderRadius: theme.radius.m,
        overflow: 'hidden',
    },
    cardGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryLabel: {
        color: colors.textPrimary,
        fontSize: 16,
        fontFamily: theme.font.bold,
    },
});
