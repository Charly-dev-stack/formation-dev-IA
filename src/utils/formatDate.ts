export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  // If date is invalid, return empty string
  if (isNaN(date.getTime())) {
    return '';
  }
  
  // Check if date is today
  if (date.toDateString() === now.toDateString()) {
    return 'Today';
  }
  
  // Check if date is tomorrow
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }
  
  // Get day of week for dates within the next 7 days
  const nextWeek = new Date(now);
  nextWeek.setDate(nextWeek.getDate() + 7);
  if (date < nextWeek && date > now) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }
  
  // Format for other dates
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};