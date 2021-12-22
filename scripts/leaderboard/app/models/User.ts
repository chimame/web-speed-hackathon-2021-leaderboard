import { supabase } from '~/util/supabaseClient'
import { getUserToken } from '~/util/session.server'

export const getUser = async (cookie: string) => {
  const token = await getUserToken(cookie)
  if (token === null) {
    return null
  }

  const { user, error } = await supabase.auth.api.getUser(token)
  if (error !== null) {
    throw error
  }
  return user
}
