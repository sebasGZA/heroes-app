import { RouterProvider } from "react-router"
import { router } from "./router/app.routes"

export const HeroesApp = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}