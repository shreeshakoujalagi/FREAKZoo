import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';

interface MoodBoardCardProps {
    item: any;
}

const MoodBoardCard: React.FC<MoodBoardCardProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                    <View>
                        <Text style={styles.name}>{item.user.name}</Text>
                        <Text style={styles.username}>{item.user.username}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <MoreHorizontal color={colors.textSecondary} size={20} />
                </TouchableOpacity>
            </View>

            <Text style={styles.boardTitle}>{item.title}</Text>

            <View style={styles.gridContainer}>
                <View style={styles.largeImageContainer}>
                    <Image source={{ uri: item.images[0] }} style={styles.largeImage} />
                </View>
                <View style={styles.smallImagesContainer}>
                    <Image source={{ uri: item.images[1] }} style={styles.smallImage} />
                    <Image source={{ uri: item.images[2] }} style={styles.smallImage} />
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Heart color={colors.accentPink} size={20} fill={colors.accentPink} />
                        <Text style={styles.actionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle color={colors.textSecondary} size={20} />
                        <Text style={styles.actionText}>{item.comments}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Share2 color={colors.textSecondary} size={20} />
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
        borderColor: 'rgba(255, 255, 255, 0.1)',
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
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    name: {
        color: colors.textPrimary,
        fontSize: 13,
        fontFamily: theme.font.bold,
    },
    username: {
        color: colors.textSecondary,
        fontSize: 11,
        fontFamily: theme.font.regular,
    },
    boardTitle: {
        color: colors.textPrimary,
        fontSize: 18,
        fontFamily: theme.font.bold,
        marginBottom: 12,
        letterSpacing: 0.5,
    },
    gridContainer: {
        flexDirection: 'row',
        height: 200,
        borderRadius: theme.radius.m,
        overflow: 'hidden',
        marginBottom: 16,
    },
    largeImageContainer: {
        flex: 2,
        marginRight: 4,
    },
    largeImage: {
        width: '100%',
        height: '100%',
    },
    smallImagesContainer: {
        flex: 1,
    },
    smallImage: {
        flex: 1,
        width: '100%',
        marginBottom: 4,
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

export default MoodBoardCard;
