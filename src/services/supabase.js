import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vpyypsdghdreeuzmiopt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweXlwc2RnaGRyZWV1em1pb3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNTAwMTEsImV4cCI6MjAyNDkyNjAxMX0.IpEdoc16eRXRtEQLLCpkyupF-ZsogGM7RaHkGvDu7S0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
