// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = ""; //Project Settings -> Data API -> API URL
const supabaseAnonKey = ""; //Project Settings -> API keys ->Publishable key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
