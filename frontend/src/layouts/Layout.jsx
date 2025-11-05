import { Outlet } from 'react-router-dom';
import Header from '../conponents/Header';
import Footer from '../conponents/Footer';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;