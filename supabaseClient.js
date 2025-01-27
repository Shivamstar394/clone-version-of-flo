import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://urazauuzfuisqyrzrnmp.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYXphdXV6ZnVpc3F5cnpybm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NjAzNzksImV4cCI6MjA1MzIzNjM3OX0.RL2loDU-Wno2jQRhWEn_58-LcIBJ7RmijlcWzc0xk6c'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
