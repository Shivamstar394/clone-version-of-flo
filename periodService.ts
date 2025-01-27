import { supabase } from './supabaseClient';

export const savePeriodLog = async (userId: string, startDate: string, endDate?: string) => {
  const { error } = await supabase
    .from('period_logs')
    .insert([{ user_id: userId, start_date: startDate, end_date: endDate }]);
  if (error) console.error(error.message);
};
