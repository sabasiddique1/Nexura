import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
// import RightSidebar from "@/components/RightSidebar";
import {getLoggedInUser} from "@/lib/actions/user.actions";

const Home = async () => {
    const loggedIn = await getLoggedInUser()
    const accounts: Account[] = [
        { id: "1", name: "Bank 1", currentBalance: 1000 },
        { id: "2", name: "Bank 2", currentBalance: 2000 }
    ];

    return (
        <section className="home">
               <div className="home-content">
                   <header className="home-header">
                       <HeaderBox
                           type="greeting"
                           title="Welcome"
                           user={loggedIn?.name || 'Guest'}
                           subtext="Access and Manage your account and transactions effectively"
                       />
                       <TotalBalanceBox
                           accounts={accounts}
                           totalBanks={accounts.length}
                           totalCurrentBalance={accounts.reduce((acc, curr) => acc + curr.currentBalance, 0)}
                       />
                   </header>
               </div>
                   {/*<RightSidebar*/}
                   {/*    user={loggedIn as User}*/}
                   {/*    transactions={[]}*/}
                   {/*    banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]}*/}
                   {/*/>*/}
           </section>
    );
}

export default Home;