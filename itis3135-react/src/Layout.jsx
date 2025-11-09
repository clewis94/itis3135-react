import Header from '.Header.jsx'
import { Outlet } from 'react-router';
export default function Layout() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>
            <p>Page Built by <a href="https://CraftyLlama.com">Lewis Firm </a>&copy;2025</p>
        </footer>
        </>
    );
}