import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface PaperTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  mode?: "flat" | "outlined";
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  error?: boolean;
}

const PaperTextInput: React.FC<PaperTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  mode = "outlined",
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  error = false,
}) => {
  return (
    <TextInput
      style={styles.input}
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      mode={mode}
      disabled={disabled}
      multiline={multiline}
      numberOfLines={numberOfLines}
      error={error}
    />
  );
};

export default PaperTextInput;

const styles = StyleSheet.create({
  input: {
    margin: 4,
    backgroundColor: "white",
  },
});
