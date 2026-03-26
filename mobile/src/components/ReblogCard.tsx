import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Repeat2, Heart, MessageCircle } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';

interface ReblogCardProps {
    item: any;
}

const ReblogCard: React.FC<ReblogCardProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.reblogHeader}>
                <Repeat2 color={colors.mint} size={16} />
                <Text style={styles.reblogText}>{item.user.name} reblogged</Text>
            </View>

            <View style={styles.originalPost}>
                <View style={styles.originalHeader}>
                    <Image source={{ uri: item.originalPost.user.avatar }} style={styles.smallAvatar} />
                    <Text style={styles.originalUsername}>{item.originalPost.user.username}</Text>
                </View>
                <Text style={styles.originalContent}>{item.originalPost.content}</Text>
            </View>

            <Text style={styles.comment}>{item.content}</Text>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Heart color={colors.textSecondary} size={18} />
                        <Text style={styles.actionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle color={colors.textSecondary} size={18} />
                        <Text style={styles.actionText}>{item.comments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Repeat2 color={colors.mint} size={18} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: theme.radius.l,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 179, 0.1)',
    },
    reblogHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    reblogText: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: theme.font.medium,
        marginLeft: 8,
    },
    originalPost: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: theme.radius.m,
        padding: 12,
        borderLeftWidth: 3,
        borderLeftColor: colors.mint,
        marginBottom: 12,
    },
    originalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    smallAvatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 8,
    },
    originalUsername: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: theme.font.bold,
    },
    originalContent: {
        color: colors.textSecondary,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: theme.font.regular,
    },
    comment: {
        color: colors.textPrimary,
        fontSize: 15,
        fontFamily: theme.font.medium,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    actionText: {
        color: colors.textSecondary,
        fontSize: 13,
        marginLeft: 6,
        fontFamily: theme.font.medium,
    },
});

export default ReblogCard;
