import useSocialAuth from "@/hooks/useSocialAuth";
import { FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Pressable, Text, View } from "react-native";


type SocialAuth = "oauth_google" | "oauth_github" | "oauth_apple";

const SocialButton = ({ isLoading, isGoogleClicked, socialAuth }: { isLoading: boolean; isGoogleClicked: boolean, socialAuth: SocialAuth }) => {

  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  return (
    <Pressable
      className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""
        }`}
      disabled={isLoading}
      onPress={() => handleSocialAuth(socialAuth)}
    >
      <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
        <FontAwesome name={socialAuth === "oauth_google" ? "google" : socialAuth === "oauth_github" ? "github" : "apple"} size={24} color="#111" />
      </View>

      <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
        {isGoogleClicked ? "Connecting " + socialAuth.split("_")[2].charAt(0).toUpperCase() + socialAuth.split("_")[2].slice(1) + "..." : "Continue with " + socialAuth.split("_")[2].charAt(0).toUpperCase() + socialAuth.split("_")[2].slice(1)}
      </Text>
      <FontAwesome name="angle-right" size={18} color="#5f6e66" />
    </Pressable>
  )
}

export default SocialButton