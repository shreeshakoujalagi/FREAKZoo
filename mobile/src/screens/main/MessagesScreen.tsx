import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { colors, theme } from '../../theme/colors';
import { Search, Edit } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const MOCK_FRIENDS = [
    { id: '1', name: 'Alex', lastMessage: 'Yo, did you see that new room?', time: '2m', isOnline: true },
    { id: '2', name: 'Sam', lastMessage: 'Lmao true 😂', time: '1h', isOnline: true },
    { id: '3', name: 'Jordan', lastMessage: 'Are we still meeting up later?', time: '3h', isOnline: false },
    { id: '4', name: 'Taylor', lastMessage: 'Sent a reel', time: '5h', isOnline: false },
    { id: '5', name: 'Casey', lastMessage: 'Thanks!', time: '1d', isOnline: false },
];

export default function MessagesScreen() {
    const navigation = useNavigation<any>();

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Messages</Text>
            <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                    <Search color={colors.white} size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Edit color={colors.white} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderMessageItem = ({ item }: { item: typeof MOCK_FRIENDS[0] }) => (
        <TouchableOpacity
            style={styles.messageItem}
            onPress={() => navigation.navigate('DirectMessage', { id: item.id, name: item.name })}
        >
            <View style={styles.avatarContainer}>
                <LinearGradient
                    colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                    style={styles.avatarGradient}
                >
                    <Text style={styles.avatarInitial}>{item.name[0]}</Text>
                </LinearGradient>
                {item.isOnline && <View style={styles.onlineDot} />}
            </View>
            <View style={styles.messageContent}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.lastMessageText} numberOfLines={1}>
                    {item.lastMessage}
                </Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            {renderHeader()}
            <FlatList
                data={MOCK_FRIENDS}
                keyExtractor={item => item.id}
                renderItem={renderMessageItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: theme.font.bold,
        color: colors.white,
    },
    headerRight: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 16,
        padding: 4,
    },
    listContent: {
        paddingVertical: 8,
    },
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatarGradient: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInitial: {
        color: colors.white,
        fontSize: 20,
        fontFamily: theme.font.bold,
    },
    onlineDot: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.success,
        borderWidth: 2,
        borderColor: colors.background,
    },
    messageContent: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 16,
        fontFamily: theme.font.bold,
        color: colors.white,
        marginBottom: 2,
    },
    lastMessageText: {
        fontSize: 14,
        fontFamily: theme.font.regular,
        color: colors.textSecondary,
    },
    timeText: {
        fontSize: 12,
        fontFamily: theme.font.medium,
        color: colors.textSecondary,
        marginLeft: 8,
    },
});
