import SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import ImageLogo from '../../public/icons/logo.svg'
import {getLoggedInUser} from "@/lib/actions/user.actions";
import {redirect, useRouter} from "next/navigation";

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = await getLoggedInUser()

    if(!loggedIn) redirect('/')

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
