import { toLowerCaseWords } from "../lib/utils/helpers";
import { TagProps } from "../types/types";
import { ColrosMapTypes } from "../types/types";

const colorMap: ColrosMapTypes = {
  admin: {
    text: "text-admin-text",
    bg: "bg-admin-bg",
  },
  "umm al quwain": {
    text: "text-umm-al-quwain-text",
    bg: "bg-umm-al-quwain-bg",
  },
  sharjah: { text: "text-sharjah-text", bg: "bg-sharjah-bg" },
  dubai: { text: "text-dubai-text", bg: "bg-dubai-bg" },
  "Abu Dhabi": { text: "text-abu-dhabi-text", bg: "bg-abu-dhabi-bg" },
  ajman: { text: "text-ajman-text", bg: "bg-ajman-bg" },
  "ras al khaimah": {
    text: "text-ras-al-khaimah-text",
    bg: "bg-ras-al-khaimah-bg",
  },
  fujairah: { text: "text-fujairah-text", bg: "bg-fujairah-bg" },
};

export default function Tag({
  color = "Sharjah",
  children,
  className = "",
  size = "sm",
}: TagProps) {
  const sizeClass = size === "lg" ? "p-tag-lg" : "p-tag-sm";
  color = toLowerCaseWords(color);
  const colorClass = colorMap[color];
  return (
    <span
      className={`rounded-full w-fit ${sizeClass} ${colorClass.text} ${colorClass.bg} ${className}`}
    >
      {children}
    </span>
  );
}
