import type { RouteObject } from 'react-router-dom'

import { createHashRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Player } from './components/Player'
import { defaultMedia } from './media'

const routes: RouteObject[] = defaultMedia.map((src, index) => ({
    index: index === 0,
    path: index > 0 ? `${index + 1}` : undefined,
    element: <Player src={src} />
}))

export const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: routes
    }
])