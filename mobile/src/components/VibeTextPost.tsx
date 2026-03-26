import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heart, MessageCircle, Repeat2, Bookmark, MoreHorizontal } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';

interface VibeTextPostProps {
    item: any;
}

const VibeTextPost: React.FC<VibeTextPostProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                    <View>
                        <Text style={styles.name}>{item.user.name}</Text>
                        <Text style={styles.username}>{item.user.username} • {item.timestamp}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <MoreHorizontal color={colors.textSecondary} size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.content}>{item.content}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Heart color={colors.textSecondary} size={20} />
                        <Text style={styles.actionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle color={colors.textSecondary} size={20} />
                        <Text style={styles.actionText}>{item.comments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Repeat2 color={colors.textSecondary} size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Bookmark color={colors.textSecondary} size={20} />
                </TouchableOpacity>
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
        borderColor: 'rgba(255, 255, 255, 0.05)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        color: colors.textPrimary,
        fontSize: 14,
        fontFamily: theme.font.bold,
    },
    username: {
        color: colors.textSecondary,
        fontSize: 12,
        fontFamily: theme.font.regular,
    },
    contentContainer: {
        marginBottom: 16,
    },
    content: {
        color: colors.textPrimary,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: theme.font.regular,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.05)',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    actionText: {
        color: colors.textSecondary,
        fontSize: 14,
        marginLeft: 6,
        fontFamily: theme.font.medium,
    },
});

export default VibeTextPost;
