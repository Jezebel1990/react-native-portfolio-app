import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from './GradientLayoutStyle';

interface GradientLayoutProps {
  children: ReactNode;
}

export function GradientLayout({ children }: GradientLayoutProps) {
  return (
    <LinearGradient
      colors={["#4d07db", "#6614ae"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}