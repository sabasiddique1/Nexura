import SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import ImageLogo from '../../public/icons/logo.svg'

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Saba', lastName: 'Siddique' };
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn as User}/>

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src={ImageLogo} width={30} height={30} alt="logo" />
                    <div>
                        <MobileNav user={loggedIn as User}/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
