import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://aaeqefcjgtykduwvmkya.supabase.co';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZXFlZmNqZ3R5a2R1d3Zta3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNDI2MzgsImV4cCI6MjEwNDYxODYzOH0.xpZA0Jsf6fxcPKVeusslG_sWBCFqOn--0_7VykDvbFk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
