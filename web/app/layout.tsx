import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '../components/layout/AppLayout';

export const metadata: Metadata = {
    title: 'FREAKZoo - Privacy First Gen Z Social',
    description: 'Ephemeral rooms, no ads, just vibes.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-[Poppins] bg-[#0F0F14] text-white antialiased">
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1A1A22]/30 via-[#0F0F14] to-[#0F0F14] z-[-1]" />

                {/* Client-side layout handling navigation states */}
                <AppLayout>{children}</AppLayout>

            </body>
        </html>
    );
}
