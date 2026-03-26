import React, { useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Bell, PawPrint, ChevronDown, CircleDot } from 'lucide-react-native';
import { colors, theme } from '../../theme/colors';
import { FEED_POSTS, STORIES, TRENDING_TAGS } from '../../mock/data';

// Components
import StoryBubble from '../../components/StoryBubble';
import VibeTextPost from '../../components/VibeTextPost';
import ReelCard from '../../components/ReelCard';
import MoodBoardCard from '../../components/MoodBoardCard';
import ReblogCard from '../../components/ReblogCard';
import CollabPostCard from '../../components/CollabPostCard';
import FloatingCreateButton from '../../components/FloatingCreateButton';
import ZooDashboardCard from '../../components/ZooDashboardCard';

const { height, width } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const [feedType, setFeedType] = useState<'chrono' | 'trending'>('chrono');
    const [isZooVisible, setIsZooVisible] = useState(false);

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.logo}>FREAK<Text style={styles.logoAccent}>Zoo</Text></Text>
            <View style={styles.headerRight}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setIsZooVisible(true)}
                >
                    <PawPrint color={colors.primaryGradientEnd} size={24} />
                    <View style={styles.badge} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Bell color={colors.white} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderStories = () => (
        <View style={styles.storiesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesContent}>
                <StoryBubble isAddButton />
                {STORIES.map((story) => (
                    <StoryBubble
                        key={story.id}
                        user={story.user}
                        isNew={story.isNew}
                    />
                ))}
            </ScrollView>
        </View>
    );

    const renderTrendingChips = () => (
        <View style={styles.trendingContainer}>
            <View style={styles.toggleRow}>
                <TouchableOpacity
                    style={[styles.toggleBtn, feedType === 'chrono' && styles.toggleBtnActive]}
                    onPress={() => setFeedType('chrono')}
                >
                    <Text style={[styles.toggleText, feedType === 'chrono' && styles.toggleTextActive]}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleBtn, feedType === 'trending' && styles.toggleBtnActive]}
                    onPress={() => setFeedType('trending')}
                >
                    <Text style={[styles.toggleText, feedType === 'trending' && styles.toggleTextActive]}>Trending</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContent}>
                {TRENDING_TAGS.map((tag, index) => (
                    <TouchableOpacity key={index} style={styles.chip}>
                        <Text style={styles.chipText}>{tag}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    const renderPost = useCallback(({ item }: { item: any }) => {
        switch (item.type) {
            case 'vibe':
                return <VibeTextPost item={item} />;
            case 'reel':
                return <ReelCard item={item} />;
            case 'moodboard':
                return <MoodBoardCard item={item} />;
            case 'reblog':
                return <ReblogCard item={item} />;
            case 'collab':
                return <CollabPostCard item={item} />;
            default:
                return null;
        }
    }, []);

    const ListHeader = () => (
        <>
            {renderStories()}
            {renderTrendingChips()}
        </>
    );

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                {renderHeader()}
                <FlatList
                    data={FEED_POSTS}
                    keyExtractor={item => item.id}
                    renderItem={renderPost}
                    ListHeaderComponent={ListHeader}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    removeClippedSubviews={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={10}
                    windowSize={5}
                />
                <FloatingCreateButton />
            </SafeAreaView>

            <Modal
                visible={isZooVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsZooVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.modalClose}
                            onPress={() => setIsZooVisible(false)}
                        >
                            <View style={styles.closeBar} />
                        </TouchableOpacity>
                        <ZooDashboardCard />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    logo: {
        fontSize: 24,
        fontFamily: theme.font.bold,
        color: colors.white,
        letterSpacing: -1,
    },
    logoAccent: {
        color: colors.primaryGradientEnd,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 16,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.accentPink,
        borderWidth: 2,
        borderColor: colors.background,
    },
    storiesContainer: {
        marginBottom: 16,
    },
    storiesContent: {
        paddingHorizontal: 12,
    },
    trendingContainer: {
        marginBottom: 16,
    },
    toggleRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    toggleBtn: {
        marginRight: 20,
        paddingBottom: 4,
    },
    toggleBtnActive: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primaryGradientStart,
    },
    toggleText: {
        color: colors.textSecondary,
        fontSize: 16,
        fontFamily: theme.font.bold,
    },
    toggleTextActive: {
        color: colors.white,
    },
    chipsContent: {
        paddingHorizontal: 16,
    },
    chip: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    chipText: {
        color: colors.textPrimary,
        fontSize: 13,
        fontFamily: theme.font.medium,
    },
    listContent: {
        paddingBottom: 100,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: colors.background,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        maxHeight: height * 0.85,
        paddingBottom: 40,
    },
    modalClose: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    closeBar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.surfaceHighlight,
    },
});
