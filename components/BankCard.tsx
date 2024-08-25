import React from 'react';
import Link from "next/link";
import {formatAmount} from "@/lib/utils";
import Image from "next/image";

const BankCard = ({ account, userName, showBalance = true}: CreditCardProps) => {
    return (
        <div className="flex flex-col">
            <Link href="/" className="bank-card">
                <div className="bank-card_content">
                    <div>
                        <h1 className="text-16 font-semibold text-white">
                            {account.name || userName}
                        </h1>
                        <p className="font-ibm-plex-serif font-black text-white">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>

                    <article className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-white text-12">{userName}</h1>
                            <h2 className="font-semibold text-white text-12">◍◍ / ◍◍</h2>
                        </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            ◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className="text-16">123</span>
                        </p>
                    </article>
                </div>
                <div className="bank-card_icon">
                    <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay"/>
                    <Image src="/icons/mastercard.svg" width={45} height={32} alt="mastercard" className="ml-5"/>
                    <Image src="/icons/lines.svg" width={316} height={190} alt="lines" className="absolute top-0 left-0"/>

                    {/*{Copy}*/}
                </div>
            </Link>
        </div>
    )
}

export default BankCard
