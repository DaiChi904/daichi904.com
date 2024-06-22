import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import BaseLayout from "@/layouts/BaseLayout";
import PORItemContainer from "@/portfolioItem/PORItemContainer";
import PORItemLogo from "@/portfolioItem/PORItemLogo";
import PORItemTitle from "@/portfolioItem/PORItemTitle";
import PORLowerItem from "@/portfolioItem/PORLowerItem";
import PORUpperItem from "@/portfolioItem/PORUpperItem";

function Contact() {
    return (
        <>
            <BaseLayout>
                <main className="flex grow flex-col items-center justify-center">
                    <PORItemContainer>
                        <PORUpperItem>
                            <PORItemLogo>
                                <BiLogoGmail size={50} />
                            </PORItemLogo>
                            <PORItemTitle>Gmail</PORItemTitle>
                        </PORUpperItem>
                        <PORLowerItem>daichi904.22219@gmail.com</PORLowerItem>
                    </PORItemContainer>

                    <PORItemContainer>
                        <Link
                            href="https://github.com/DaiChi904"
                            className="hover:rounded-lg hover:bg-purple-600 hover:opacity-95"
                        >
                            <PORUpperItem>
                                <PORItemLogo>
                                    <FaGithub size={50} />
                                </PORItemLogo>
                                <PORItemTitle>Github</PORItemTitle>
                            </PORUpperItem>
                        </Link>
                    </PORItemContainer>
                </main>
            </BaseLayout>
        </>
    );
}

export default Contact;
