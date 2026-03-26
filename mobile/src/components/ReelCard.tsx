import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2, MoreVertical, Music } from 'lucide-react-native';
import { colors, theme } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

interface ReelCardProps {
    item: any;
}

const ReelCard: React.FC<ReelCardProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1614850523296-e8c041de83a4?q=80&w=2070&auto=format&fit=crop' }}
                style={styles.videoPlaceholder}
            />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.overlay}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.mainContent}>
                        <View style={styles.userInfo}>
                            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                            <Text style={styles.username}>{item.user.username}</Text>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.caption} numberOfLines={2}>
                            {item.content}
                        </Text>

                        <View style={styles.audioContainer}>
                            <Music size={14} color={colors.white} />
                            <Text style={styles.audioText}>Original Audio - {item.user.name}</Text>
                        </View>
                    </View>

                    <View style={styles.rightActions}>
                        <TouchableOpacity style={styles.actionItem}>
                            <View style={styles.iconCircle}>
                                <Heart size={28} color={colors.white} fill={colors.accentPink} />
                            </View>
                            <Text style={styles.actionLabel}>{item.likes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionItem}>
                            <View style={styles.iconCircle}>
                                <MessageCircle size={28} color={colors.white} />
                            </View>
                            <Text style={styles.actionLabel}>{item.comments}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionItem}>
                            <View style={styles.iconCircle}>
                                <Share2 size={28} color={colors.white} />
                            </View>
                            <Text style={styles.actionLabel}>Share</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionItem}>
                            <MoreVertical size={24} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height - 100, // Account for BottomNav and Header
        backgroundColor: colors.black,
        overflow: 'hidden',
    },
    videoPlaceholder: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        padding: 16,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    mainContent: {
        flex: 1,
        marginRight: 60,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.white,
    },
    username: {
        color: colors.white,
        fontFamily: theme.font.bold,
        fontSize: 15,
        marginLeft: 10,
    },
    followBtn: {
        marginLeft: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.white,
    },
    followText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: theme.font.medium,
    },
    caption: {
        color: colors.white,
        fontSize: 14,
        fontFamily: theme.font.regular,
        marginBottom: 12,
    },
    audioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    audioText: {
        color: colors.white,
        fontSize: 12,
        marginLeft: 8,
        fontFamily: theme.font.regular,
    },
    rightActions: {
        alignItems: 'center',
    },
    actionItem: {
        alignItems: 'center',
        marginBottom: 20,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    actionLabel: {
        color: colors.white,
        fontSize: 12,
        fontFamily: theme.font.medium,
    },
});

export default ReelCard;
