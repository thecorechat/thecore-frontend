export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function getDateKey(dateString) {
  const d = new Date(dateString);
  return d.toISOString().split("T")[0];
}

export function formatDividerDate(dateString) {
  const d = new Date(dateString);
  //   const today = new Date();
  const today = new Date("2025-10-14T10:26:00Z");
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
