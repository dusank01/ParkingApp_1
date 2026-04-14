// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// Ove podatke kopiraj sa Supabase Dashboard-a (Settings -> API)
const supabaseUrl = "https://ernljwvfexqraudsxopv.supabase.co";
const supabaseAnonKey = "sb_publishable_sEr2oa56U7uK_2br-ufXkQ_BhOYo5zL";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
