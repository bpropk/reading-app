import { colors } from "@src/common/theme";
import React, { forwardRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {
  label?: string;
  onSubmitEditing?: () => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  errText?: string | undefined;
  value?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      value,
      onChangeText = () => void 0,
      onSubmitEditing,
      secureTextEntry = false,
      errText,
    },
    ref: any
  ) => {
    const displayContent = (errText: string | undefined) => {
      if (errText) {
        return <Text style={styles.errorText}>{errText}</Text>;
      }
      return "";
    };

    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={ref}
          value={value}
          style={[styles.input, errText ? { borderColor: colors.red } : {}]}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {displayContent(errText)}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  errorText: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.red,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  label: {
    marginVertical: 10,
  },
});
