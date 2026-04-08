
import useSocialAuth from '@/hooks/useSocialAuth';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SocialButton from '@/components/SocialButton';

export default function SignInScreen() {


  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isAppleClicked = loadingStrategy === "oauth_apple";
  const isGitHubClicked = loadingStrategy === "oauth_github";

  const isLoading = isAppleClicked || isGitHubClicked || isGoogleClicked;

  return (
    <SafeAreaView className="flex-1 p-3" edges={["top"]}>

      <View className="mt-6">
        <SocialButton
          isLoading={isLoading}
          isGoogleClicked={isGoogleClicked}
          socialAuth="oauth_google"
        />
        <SocialButton
          isLoading={isLoading}
          isGoogleClicked={isGitHubClicked}
          socialAuth="oauth_github"
        />
        <SocialButton
          isLoading={isLoading}
          isGoogleClicked={isAppleClicked}
          socialAuth="oauth_apple"
        />
      </View>

      <Text className="mt-3 text-center text-sm leading-5 text-muted-foreground">
        By continuing, you agree to our Terms and Privacy Policy.
      </Text>
    </SafeAreaView >
  );
}