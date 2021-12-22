import { LoaderFunction, redirect, useLoaderData } from "remix"
import { useAuth } from "~/hooks/useAuth"
import { getUser } from '~/models/User'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  if (cookie === null || getUser(cookie) === null) {
    return redirect('/signin')
  }

  return {}
}


export default function Dashboard() {
  useLoaderData()
  useAuth()

  return (
    <div>dashboard</div>
  )
}
