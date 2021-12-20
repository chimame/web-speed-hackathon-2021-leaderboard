import { createCookieSessionStorage } from "remix"

const sessionSecret = SESSION_SECRET || 'secret'
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
})

export const createUserToken = async (cookieHeader: string | null, token?: string) => {
  const session = await storage.getSession(cookieHeader)
  session.set('token', token)
  return {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  }
}

export const getUserToken = async (cookieHeader: string | null) => {
  const session = await storage.getSession(cookieHeader)
  return session.get('token') as null | string
}
