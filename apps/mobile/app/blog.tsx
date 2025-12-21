import { SafeAreaView, Text, View } from "react-native";

export default function Screen() {
  return (
    <SafeAreaView style={ flex: 1, padding: 16 }>
      <Text style={ color: "white", fontSize: 22, fontWeight: "700" }>Blog</Text>
      <Text style={ color: "#a1a1aa", marginTop: 10, lineHeight: 20 }>
        Blog list placeholder. Later, load posts from web/CMS using shared types.
      </Text>
      <View style={ marginTop: 18, padding: 14, borderWidth: 1, borderColor: "#27272a", borderRadius: 14 }>
        <Text style={ color: "#a1a1aa" }>Placeholder screen — replace anytime.</Text>
      </View>
    </SafeAreaView>
  );
}
