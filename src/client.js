import { createClient } from '@supabase/supabase-js';

const URL = 'https://zfczcpbrudzkyxtyjipx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmY3pjcGJydWR6a3l4dHlqaXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNTc1NzcsImV4cCI6MjAwMTkzMzU3N30._aAE25HWtB6oGpH_rreNQ1ruWjqE1pFeYzEiToNoGkI';

export const supabase = createClient(URL, API_KEY);
