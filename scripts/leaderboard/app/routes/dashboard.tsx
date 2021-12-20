import { useAuth } from "~/hooks/useAuth"

export default function Dashboard() {
  useAuth()

  return (
    <div>dashboard</div>
  )
}
