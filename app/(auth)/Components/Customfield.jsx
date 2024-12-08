import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types"; // Import PropTypes if needed for type checking
// Ensure this path is correct

const getBgVariantStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return styles.bgSecondary;
    case "danger":
      return styles.bgDanger;
    case "success":
      return styles.bgSuccess;
    case "outline":
      return styles.bgOutline;
    default:
      return styles.bgPrimary;
  }
};

const getTextVariantStyle = (variant) => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "danger":
      return styles.textDanger;
    case "success":
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        getBgVariantStyle(bgVariant),
        props.style, // Allow overriding styles with external props
      ]}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

// PropTypes (Optional, but recommended)
CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bgVariant: PropTypes.oneOf(["primary", "secondary", "danger", "success", "outline"]),
  textVariant: PropTypes.oneOf(["primary", "secondary", "danger", "success", "default"]),
  IconLeft: PropTypes.elementType,
  IconRight: PropTypes.elementType,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 999, // Rounded full
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5, // Spacing between text and icons
  },
  // Background color variants
  bgPrimary: {
    backgroundColor: "#0286FF",
  },
  bgSecondary: {
    backgroundColor: "#6B7280", // gray-500
  },
  bgDanger: {
    backgroundColor: "#EF4444", // red-500
  },
  bgSuccess: {
    backgroundColor: "#10B981", // green-500
  },
  bgOutline: {
    backgroundColor: "transparent",
    borderColor: "#D1D5DB", // neutral-300
    borderWidth: 0.5,
  },
  // Text color variants
  textPrimary: {
    color: "#000000",
  },
  textSecondary: {
    color: "#F3F4F6", // gray-100
  },
  textDanger: {
    color: "#FEE2E2", // red-100
  },
  textSuccess: {
    color: "#D1FAE5", // green-100
  },
  textDefault: {
    color: "#FFFFFF",
  },
});

export default CustomButton;
