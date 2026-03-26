import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, theme } from '../theme/colors';
import { Heart, MessageCircle } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface DropCardProps {
    item: any;
}

function DropCard({ item }: DropCardProps) {
    return (
        <View style={styles.cardContainer}>
            <LinearGradient
                colors={[colors.surface, '#000000']}
                style={styles.background}
            />

            {item.image && (
                <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            )}

            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                    <Text style={styles.username}>{item.user.username}</Text>
                </View>

                <Text style={styles.content}>{item.content}</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Heart size={24} color={colors.accentPink} />
                        <Text style={styles.actionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle size={24} color={colors.textSecondary} />
                        <Text style={styles.actionText}>{item.comments}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width,
        height: height - 80, // Adjust for bottom tab bar
        justifyContent: 'flex-end',
        backgroundColor: colors.surface,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.6,
    },
    overlay: {
        padding: theme.spacing.l,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.s,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: theme.spacing.s,
        borderWidth: 2,
        borderColor: colors.primaryGradientStart,
    },
    username: {
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
    },
    content: {
        color: colors.textPrimary,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: theme.font.regular,
        marginBottom: theme.spacing.m,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: theme.spacing.l,
    },
    actionText: {
        color: colors.textPrimary,
        marginLeft: theme.spacing.xs,
        fontFamily: theme.font.medium,
    },
});

export default React.memo(DropCard);
