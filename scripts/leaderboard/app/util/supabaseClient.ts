import { createClient } from '@supabase/supabase-js'

const supabaseUrl = typeof window !== "undefined" ? window?.ENV?.SUPABASE_URL || '' : SUPABASE_URL || ''
const supabaseAnonKey = typeof window !== "undefined" ? window?.ENV?.SUPABASE_ANON_KEY || '' : SUPABASE_ANON_KEY || ''
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
