import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import GridContainer from "@/features/common/grid/GridContainer";

import Item from "../../common/Item";

const iconSize = 80;

export default function ContactPageContent() {
    return (
        <Container justifyContent="center">
            <GridContainer padding="py-5 px-10" gap="gap-x-10 gap-y-6" gridColumns="grid-cols-1" gridRows="grid-rows-2" grow={false}>
                <Item
                    icon={<BiLogoGmail size={iconSize} />}
                    itemTitle="Gmail"
                    itemContent={<Typography>daichi904.22219@gmail.com</Typography>}
                />
                <Link href="https://github.com/DaiChi904" className="hover:bg-purple-600">
                    <Item
                        icon={<FaGithub size={iconSize} />}
                        itemTitle="Github"
                        itemContent={<Typography>My Profile</Typography>}
                    />
                </Link>
            </GridContainer>
        </Container>
    );
}
