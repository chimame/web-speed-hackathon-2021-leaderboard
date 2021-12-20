import { Session, User } from '@supabase/gotrue-js'
import { useEffect, useState } from 'react'
import { useNavigate } from 'remix'
import { supabase } from '~/util/supabaseClient'

const postData = (url: string, data = {}) => {
  fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const supabaseAuthSession = supabase.auth.session()
    setSession(supabaseAuthSession)
    setUser(supabaseAuthSession?.user ?? null)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, supabaseAuthSession) => {
        await postData('/api/auth', {
          token: supabaseAuthSession?.access_token,
        })

        setSession(supabaseAuthSession)
        setUser(supabaseAuthSession?.user ?? null)
        if (supabaseAuthSession?.user) {
          navigate('/dashboard')
        }
      }
    )
    return () => {
      if (authListener !== null) {
        authListener.unsubscribe()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, session }
}

export { useAuth }
