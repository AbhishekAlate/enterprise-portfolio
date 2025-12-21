import { Link } from "expo-router";
import { SafeAreaView, Text, View, Pressable } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ color: "white", fontSize: 28, fontWeight: "700" }}>
        Enterprise Portfolio
      </Text>
      <Text style={{ color: "#a1a1aa", marginTop: 8, lineHeight: 20 }}>
        Expo Router app with placeholder pages for Projects, Blog, Contact, and About.
      </Text>

      <View style={{ marginTop: 18, gap: 12 }}>
        <Link href="/projects" asChild>
          <Pressable style={btnPrimary}><Text style={{ color: "#0a0a0a", fontWeight: "800" }}>Projects</Text></Pressable>
        </Link>
        <Link href="/blog" asChild>
          <Pressable style={btnGhost}><Text style={{ color: "white", fontWeight: "800" }}>Blog</Text></Pressable>
        </Link>
        <Link href="/contact" asChild>
          <Pressable style={btnGhost}><Text style={{ color: "white", fontWeight: "800" }}>Contact</Text></Pressable>
        </Link>
        <Link href="/about" asChild>
          <Pressable style={btnGhost}><Text style={{ color: "white", fontWeight: "800" }}>About</Text></Pressable>
        </Link>
      </View>

      <View style={{ marginTop: 24, padding: 14, borderWidth: 1, borderColor: "#27272a", borderRadius: 14 }}>
        <Text style={{ color: "white", fontWeight: "700" }}>Dev tip</Text>
        <Text style={{ color: "#a1a1aa", marginTop: 6 }}>
          Set EXPO_PUBLIC_WEB_BASE_URL in apps/mobile/.env to your Vercel URL (or your machine IP for local testing).
        </Text>
      </View>
    </SafeAreaView>
  );
}

const btnPrimary = { backgroundColor: "#fafafa", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 14, alignItems: "center" as const };
const btnGhost = { borderWidth: 1, borderColor: "#27272a", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 14, alignItems: "center" as const };
