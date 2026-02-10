import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cmuprlihcdgdbdpjdodk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdXBybGloY2RnZGJkcGpkb2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MzI0NzYsImV4cCI6MjA4NjIwODQ3Nn0.TK9iF4oqVKsK2D9rzODGRGzl1jsSNCk9jpPc1pkPPC8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

