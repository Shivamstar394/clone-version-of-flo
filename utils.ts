import { supabase } from '../supabase';

/**
 * Validates an email address format.
 * @param email - The email address to validate.
 * @returns True if the email is valid, otherwise false.
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a password (minimum 6 characters).
 * @param password - The password to validate.
 * @returns True if the password meets the criteria, otherwise false.
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Formats a date to a human-readable format (e.g., Jan 01, 2025).
 * @param date - The date string in ISO format.
 * @returns A formatted date string.
 */
export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

/**
 * Fetches all period logs from Supabase.
 * @returns The period logs or an error message.
 */
export const fetchPeriodLogs = async () => {
  try {
    const { data, error } = await supabase.from('period_logs').select('*').order('start_date', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching period logs:', (error as any).message);
    return [];
  }
};

/**
 * Adds a new period log to Supabase.
 * @param startDate - The start date of the period.
 * @param endDate - The end date of the period.
 * @param userId - The ID of the user.
 * @returns A success message or an error message.
 */
export const addPeriodLog = async (startDate: string, endDate: string, userId: string) => {
  try {
    const { error } = await supabase
      .from('period_logs')
      .insert([{ start_date: startDate, end_date: endDate, user_id: userId }]);
    if (error) throw error;
    return 'Period log added successfully!';
  } catch (error) {
    console.error('Error adding period log:', (error as any).message);
    return 'Failed to add period log.';
  }
};

/**
 * Signs out the current user.
 * @returns A success or error message.
 */
export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return 'User signed out successfully!';
  } catch (error) {
    console.error('Error signing out:', (error as any).message);
    return 'Failed to sign out.';
  }
};
