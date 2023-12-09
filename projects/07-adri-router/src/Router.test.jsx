import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Router } from './Router.jsx'
import { waitFor } from "@testing-library/dom";
import { Route } from './Route.jsx'
import { getCurrentPath } from "./utils.js";
import { Link } from './Link.jsx'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup();
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]}/>);
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })
    
    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/about',
                component: () => <h1>About</h1>
            },
            {
                path: '/',
                component: () => <h1>Home</h1>
            }
        ];

        render(<Router routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy();
    })
})