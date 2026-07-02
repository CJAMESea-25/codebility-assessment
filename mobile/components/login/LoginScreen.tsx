import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons as _Ionicons } from '@expo/vector-icons';

const Ionicons = _Ionicons as any;
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { OutlineButton } from '@/components/shared/OutlineButton';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    Alert.alert('Login pressed');
    onLogin();
  };

  const handleFacebookLogin = () => {
    Alert.alert('Login with Facebook pressed');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password pressed');
  };

  const handleSignUp = () => {
    Alert.alert('Sign up pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <Text style={styles.logo}>Instagram</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              accessibilityLabel="Email address input"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter your password"
              placeholderTextColor="#AAAAAA"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="Password input"
            />
            <Pressable
              style={styles.eyeIcon}
              onPress={() => setShowPassword((prev) => !prev)}
              accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#AAAAAA"
              />
            </Pressable>
          </View>

          {/* Remember Me + Forgot Password */}
          <View style={styles.rememberRow}>
            <Pressable
              style={styles.rememberLeft}
              onPress={() => setRememberMe((prev) => !prev)}
              accessibilityRole="checkbox"
              accessibilityLabel="Remember Me"
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && (
                  <Ionicons name="checkmark" size={12} color="#FFFFFF" />
                )}
              </View>
              <Text style={styles.rememberText}>Remember Me</Text>
            </Pressable>

            <Pressable onPress={handleForgotPassword} accessibilityLabel="Forgot password">
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>

          {/* Login Button */}
          <PrimaryButton label="Login" onPress={handleLogin} />

          {/* Facebook Login Button */}
          <View style={styles.spacerSmall} />
          <OutlineButton label="Login with facebook" onPress={handleFacebookLogin} />

          {/* OR Divider */}
          <View style={styles.orRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Sign Up */}
          <Pressable
            style={styles.signUpRow}
            onPress={handleSignUp}
            accessibilityLabel="Sign up"
          >
            <Text style={styles.signUpText}>
              {"Don't have an account ? "}
              <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 40,
  },

  // Logo
  logo: {
    fontSize: 48,
    color: '#000000',
    fontFamily: 'DancingScript_700Bold',
    marginBottom: 36,
    letterSpacing: -0.5,
  },

  // Inputs
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#262626',
  },
  passwordInput: {
    paddingRight: 48,
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    top: 15,
  },

  // Remember Me row
  rememberRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 4,
  },
  rememberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#E1306C',
    borderColor: '#E1306C',
  },
  rememberText: {
    fontSize: 13,
    color: '#262626',
  },
  forgotText: {
    fontSize: 13,
    color: '#E1306C',
    fontWeight: '500',
  },

  spacerSmall: {
    height: 12,
  },

  // OR divider
  orRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DBDBDB',
  },
  orText: {
    fontSize: 13,
    color: '#737373',
    fontWeight: '500',
    letterSpacing: 1,
  },

  // Sign Up
  signUpRow: {
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#262626',
  },
  signUpLink: {
    color: '#E1306C',
    fontWeight: '700',
  },
});
