export {}

declare global {
  const NODE_ENV: 'development' | 'production'
  const SUPABASE_URL: string | undefined
  const SUPABASE_ANON_KEY: string | undefined
  const SESSION_SECRET: string | undefined
  interface Window {
    ENV?: {
      SUPABASE_URL: string | undefined
      SUPABASE_ANON_KEY: string | undefined
    }
  }
}
