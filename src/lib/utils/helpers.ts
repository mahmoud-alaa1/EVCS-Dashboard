import { User } from "../../types/types";

export function processPathName(path: string): string[] {
  return path
    .split("/") // Split the path into segments
    .filter((segment) => segment.length > 0) // Filter out empty segments
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)); // Capitalize the first letter of each segment
}

export function toLowerCaseWords(str: string) {
  return str
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1)) // Convert the first letter to lowercase
    .join(" "); // Join the words back into a string
}

export const convertToCSV = (data: User[]) => {
  const headers = ["Name", "Email", "Locations", "Subscription", "Registration"];
  const rows = data.map((user) => [
    user.name,
    user.email,
    user.locations.join("; "), // Join locations for a single field
    user.subscription,
    user.registration,
  ]);
  return [headers, ...rows].map((row) => row.join(",")).join("\n");
};

export const downloadCSV = (data: User[]) => {
  const csvString = convertToCSV(data);
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `users_${new Date().toISOString().slice(0, 10)}.csv`); // Dynamic file naming
  a.click();

  URL.revokeObjectURL(url); // Clean up
};
