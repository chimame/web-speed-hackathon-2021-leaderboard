import { ActionFunction } from "remix"
import { createUserToken } from "~/util/session.server"

type JSON = {
  token?: string
}
export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      const session = await request.json() as JSON
      const { headers } = await createUserToken(request.headers.get('Cookie'), session.token)
      return new Response(null, { headers })
    }
    default: {
      throw new Response("Not Found", {
        status: 404
      })
    }
  }
}
