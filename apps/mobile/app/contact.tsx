import React, { useMemo, useState } from "react";
import { SafeAreaView, Text, TextInput, View, Pressable } from "react-native";
import { ContactSchema, sendContact } from "@repo/shared";

export default function Contact() {
  const [name, setName] = useState("Abhi");
  const [email, setEmail] = useState("abhi@example.com");
  const [message, setMessage] = useState("Hello from mobile 👋");
  const [status, setStatus] = useState<string>("");

  const baseUrl = useMemo(() => process.env.EXPO_PUBLIC_WEB_BASE_URL ?? "http://localhost:3000", []);

  async function onSend() {
    setStatus("");
    const parsed = ContactSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    try {
      await sendContact(baseUrl, parsed.data);
      setStatus("Sent ✅");
    } catch (e: any) {
      setStatus(e?.message ?? "Failed");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>Contact</Text>
      <Text style={{ color: "#a1a1aa", marginTop: 8, lineHeight: 20 }}>Posts to: {baseUrl}/api/contact</Text>

      <View style={{ marginTop: 16, gap: 10 }}>
        <TextInput value={name} onChangeText={setName} placeholder="Name" placeholderTextColor="#71717a" style={input} />
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="#71717a" style={input} />
        <TextInput value={message} onChangeText={setMessage} placeholder="Message" placeholderTextColor="#71717a" multiline style={[input, { height: 120 }]} />

        <Pressable onPress={onSend} style={btnPrimary}>
          <Text style={{ color: "#0a0a0a", fontWeight: "800" }}>Send</Text>
        </Pressable>

        {!!status && <Text style={{ color: status.includes("✅") ? "#34d399" : "#f87171" }}>{status}</Text>}
      </View>
    </SafeAreaView>
  );
}

const input = { borderWidth: 1, borderColor: "#27272a", padding: 12, borderRadius: 14, color: "white", backgroundColor: "#0a0a0a" };
const btnPrimary = { backgroundColor: "#fafafa", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 14, alignItems: "center" as const };
