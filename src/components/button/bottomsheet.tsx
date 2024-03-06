// BottomSheet.js

import React, { ReactNode } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";

interface ButtonSheetProps {
  onClose: () => void;
  isVisible: () => {};
  children?: ReactNode;
}

const BottomSheet = ({ isVisible, onClose, children }: ButtonSheetProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.sheetContainer}>
          <TouchableOpacity style={styles.overlay} onPress={onClose} />
          <View style={styles.contentContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  sheetContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
});

export default BottomSheet;
