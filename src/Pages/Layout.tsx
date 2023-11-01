import { Link, Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { AuthBar } from '../components/AuthBar';
import { useAppSelector } from '../hooks/storeHooks';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/Footer';
import { SocialLinksBar } from '../components/SocialLinksBar';

export const LayoutPage = () => {

    const isAuthWindowActive = useAppSelector(state => state.userAuthData.isAuthBarActive);

    return (
        <>
            <div className="w-full h-10 bg-layoutDark text-layoutExtraDark font-bold flex items-center pl-10">
                <Link to={'/'}>AROUND THE WORLD</Link>
            </div>

            <section className="bg-layoutLight h-full w-full min-h-screen pt-8">
                <div className="container mb-8 mx-auto">
                    <Header/>
                </div>
                <div className="container mx-auto min-h-screen mb-16">
                    <main>
                        <Outlet/>
                    </main>
                </div>

                <div className="container mx-auto mb-24">
                    <SocialLinksBar />
                </div>

                <div className="container mx-auto">
                    <Footer />
                </div>
            </section>
            {isAuthWindowActive && <AuthBar/>}
            <ToastContainer/>
        </>
    );
};