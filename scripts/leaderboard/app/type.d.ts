export {}

declare global {
  const SUPABASE_URL: string | undefined
  const SUPABASE_ANON_KEY: string | undefined
  interface Window {
    ENV?: {
      SUPABASE_URL: string | undefined
      SUPABASE_ANON_KEY: string | undefined
    }
  }
}
