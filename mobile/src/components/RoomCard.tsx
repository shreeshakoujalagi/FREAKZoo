import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, theme } from '../theme/colors';
import { Clock, Users, Hash } from 'lucide-react-native';

interface RoomCardProps {
    room: any;
    onPress: () => void;
}

function RoomCard({ room, onPress }: RoomCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[colors.surface, '#1A1A22']}
                style={styles.card}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>{room.title}</Text>
                        <Text style={styles.host}>Hosted by {room.host.name}</Text>
                    </View>
                    {room.isLive && (
                        <View style={styles.liveBadge}>
                            <Text style={styles.liveText}>LIVE</Text>
                        </View>
                    )}
                </View>

                <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                        <Clock size={16} color={colors.textSecondary} />
                        <Text style={styles.metaText}>{room.expiresIn}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Users size={16} color={colors.textSecondary} />
                        <Text style={styles.metaText}>{room.participants} online</Text>
                    </View>
                </View>

                <View style={styles.tagRow}>
                    {room.tags.map((tag: string, index: number) => (
                        <View key={index} style={styles.tag}>
                            <Hash size={12} color={colors.mint} />
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.glowBorder} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: theme.spacing.m,
        marginBottom: theme.spacing.m,
        padding: theme.spacing.l,
        borderRadius: theme.radius.l,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: theme.spacing.m,
    },
    title: {
        fontSize: 18,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        marginBottom: theme.spacing.xs,
    },
    host: {
        fontSize: 14,
        color: colors.textSecondary,
        fontFamily: theme.font.regular,
    },
    liveBadge: {
        backgroundColor: colors.error,
        paddingHorizontal: theme.spacing.s,
        paddingVertical: 2,
        borderRadius: theme.radius.s,
    },
    liveText: {
        color: colors.textPrimary,
        fontSize: 10,
        fontWeight: 'bold',
    },
    metaRow: {
        flexDirection: 'row',
        marginBottom: theme.spacing.m,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: theme.spacing.l,
    },
    metaText: {
        color: colors.textSecondary,
        marginLeft: theme.spacing.xs,
        fontSize: 14,
        fontFamily: theme.font.regular,
    },
    tagRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 179, 0.1)',
        paddingHorizontal: theme.spacing.s,
        paddingVertical: 4,
        borderRadius: theme.radius.s,
        marginRight: theme.spacing.s,
        marginBottom: 4,
    },
    tagText: {
        color: colors.mint,
        fontSize: 12,
        marginLeft: 2,
        fontFamily: theme.font.medium,
    },
    glowBorder: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: theme.radius.l,
        borderWidth: 1,
        borderColor: colors.primaryGradientStart,
        opacity: 0.3,
        zIndex: -1,
    },
});

export default React.memo(RoomCard);
