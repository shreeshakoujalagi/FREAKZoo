import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2, Users } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';

interface CollabPostCardProps {
    item: any;
}

const CollabPostCard: React.FC<CollabPostCardProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.collabInfo}>
                    <View style={styles.avatarStack}>
                        <Image source={{ uri: item.users[0].avatar }} style={styles.avatar1} />
                        <Image source={{ uri: item.users[1].avatar }} style={styles.avatar2} />
                    </View>
                    <View style={styles.namesContainer}>
                        <View style={styles.row}>
                            <Text style={styles.name}>{item.users[0].name}</Text>
                            <Text style={styles.x}> & </Text>
                            <Text style={styles.name}>{item.users[1].name}</Text>
                        </View>
                        <Text style={styles.collabLabel}>Collaboration</Text>
                    </View>
                </View>
                <Users color={colors.primaryGradientEnd} size={20} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.content}>{item.content}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Heart color={colors.textPrimary} size={22} />
                        <Text style={styles.actionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle color={colors.textPrimary} size={22} />
                        <Text style={styles.actionText}>{item.comments}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Share2 color={colors.textPrimary} size={22} />
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
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(0, 229, 255, 0.15)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    collabInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarStack: {
        flexDirection: 'row',
        width: 60,
        height: 40,
        alignItems: 'center',
    },
    avatar1: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.surface,
        position: 'absolute',
        zIndex: 2,
    },
    avatar2: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.surface,
        position: 'absolute',
        left: 20,
        zIndex: 1,
    },
    namesContainer: {
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: colors.textPrimary,
        fontSize: 14,
        fontFamily: theme.font.bold,
    },
    x: {
        color: colors.textSecondary,
        fontSize: 12,
    },
    collabLabel: {
        color: colors.primaryGradientEnd,
        fontSize: 11,
        fontFamily: theme.font.medium,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    imageContainer: {
        width: '100%',
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        padding: 16,
    },
    content: {
        color: colors.textPrimary,
        fontSize: 14,
        fontFamily: theme.font.regular,
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 0,
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
        color: colors.textPrimary,
        fontSize: 14,
        marginLeft: 6,
        fontFamily: theme.font.medium,
    },
});

export default CollabPostCard;
