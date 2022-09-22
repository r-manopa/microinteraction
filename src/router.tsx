import type { RouteObject } from 'react-router-dom'

import { createHashRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Player } from './components/Player'
import { media } from './media'

const routes: RouteObject[] = media.map((src, index) => ({
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