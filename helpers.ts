export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  
  export const calculateDaysBetween = (startDate: Date, endDate: Date): number => {
    const difference = endDate.getTime() - startDate.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };
  ``