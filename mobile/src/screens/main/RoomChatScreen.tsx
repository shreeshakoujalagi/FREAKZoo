import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors, theme } from '../../theme/colors';
import { Mic, Send, ShieldAlert, BarChart2 } from 'lucide-react-native';
import { MOCK_ROOMS } from '../../mock/data';

interface Message {
    id: string;
    user: string;
    text?: string;
    isVoice?: boolean;
}

const MESSAGES: Message[] = [
    { id: '1', user: 'User1', text: 'Hey everyone! 👋' },
    { id: '2', user: 'Host', isVoice: true },
];

export default function RoomChatScreen() {
    const route = useRoute<any>();
    const navigation = useNavigation();
    const { roomId } = route.params;
    const room = MOCK_ROOMS.find(r => r.id === roomId);

    useEffect(() => {
        // Simulate anti-screenshot protection
        const interval = setInterval(() => {
            // Ideally we'd use expo-screen-capture here
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>Wait, leave?</Text>
                </TouchableOpacity>
                <Text style={styles.roomTitle}>{room?.title}</Text>
                <ShieldAlert size={24} color={colors.mint} />
            </View>

            <View style={styles.securityBanner}>
                <Text style={styles.securityText}>Anti-Screenshot Enabled. Messages disappear in 24h.</Text>
            </View>

            <FlatList
                data={MESSAGES}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.messageBubble, item.user === 'Host' ? styles.hostBubble : {}]}>
                        <Text style={styles.sender}>{item.user}</Text>
                        {item.text && <Text style={styles.messageText}>{item.text}</Text>}
                        {item.isVoice && (
                            <View style={styles.voiceNote}>
                                <Mic size={20} color={colors.textPrimary} />
                                <View style={styles.waveform} />
                                <Text style={styles.duration}>0:12</Text>
                            </View>
                        )}
                    </View>
                )}
                contentContainerStyle={styles.chatContent}
            />

            <View style={styles.inputArea}>
                <TouchableOpacity style={styles.iconButton}>
                    <BarChart2 size={24} color={colors.accentPink} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Type secretly..."
                    placeholderTextColor={colors.textSecondary}
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Send size={24} color={colors.surface} />
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
        paddingHorizontal: theme.spacing.m,
        paddingBottom: theme.spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    backButton: {
        color: colors.textSecondary,
        fontFamily: theme.font.medium,
    },
    roomTitle: {
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        maxWidth: '60%',
    },
    securityBanner: {
        backgroundColor: 'rgba(255, 46, 147, 0.1)',
        padding: theme.spacing.xs,
        alignItems: 'center',
    },
    securityText: {
        color: colors.accentPink,
        fontSize: 10,
        fontFamily: theme.font.medium,
    },
    chatContent: {
        padding: theme.spacing.m,
    },
    messageBubble: {
        backgroundColor: colors.surface,
        padding: theme.spacing.m,
        borderRadius: theme.radius.m,
        marginBottom: theme.spacing.m,
        maxWidth: '80%',
        alignSelf: 'flex-start',
    },
    hostBubble: {
        backgroundColor: 'rgba(138, 43, 226, 0.2)',
        borderColor: colors.primaryGradientStart,
        borderWidth: 1,
    },
    sender: {
        fontSize: 12,
        color: colors.textSecondary,
        marginBottom: 4,
    },
    messageText: {
        color: colors.textPrimary,
        fontSize: 16,
    },
    voiceNote: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primaryGradientStart,
        padding: theme.spacing.s,
        borderRadius: theme.radius.s,
    },
    waveform: {
        height: 4,
        width: 60,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: theme.spacing.s,
        borderRadius: 2,
    },
    duration: {
        color: colors.textPrimary,
        fontSize: 12,
    },
    inputArea: {
        flexDirection: 'row',
        padding: theme.spacing.m,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    input: {
        flex: 1,
        backgroundColor: colors.surface,
        borderRadius: theme.radius.round,
        paddingHorizontal: theme.spacing.l,
        paddingVertical: theme.spacing.s,
        color: colors.textPrimary,
        marginHorizontal: theme.spacing.m,
    },
    iconButton: {
        padding: theme.spacing.s,
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.mint,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
