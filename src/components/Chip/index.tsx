/**
 * ✅ Chip 컴포넌트
 *
 * 💬 역할:
 * - 텍스트와 색상을 받아서 칩 형태의 UI를 보여줌
 *
 * 🔧 Props:
 * @param title - 칩 안에 들어갈 텍스트 (예: '경매중')
 * @param color - 칩의 배경색 ('teal' | 'rose' | 'neutral')
 *
 * 📌 사용 예시:
 * <Chip title="즉시구매가" color="teal" />
 */

import React from "react";
import clsx from "clsx";

interface ChipProps {
  title: string;
  color?: "teal" | "rose" | "neutral";
}
export * from "./Chip";
