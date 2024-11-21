import Link from "next/link";

import { Box } from "@/components/element";
import { UnorderedList } from "@/components/element/list";
import Container from "@/components/layouts/Container";

import Introduction from "./Introduction";
import ProfileCard from "./ProfileCard";

export default function ProfilePageContent() {
    return (
        <Container alignItems="center">
            <Box className="flex w-11/12">
                <Box className="flex flex-col justify-center">
                    <Box className="flex items-center sm:flex-col l-md:flex-row">
                        <ProfileCard />
                        <Introduction />
                    </Box>
                    <Box className="flex flex-row items-center justify-center">
                        <Box className="flex items-center justify-center">{undefined}</Box>
                        <Box className="flex items-center justify-center">
                            <UnorderedList>
                                <Box className="m-2 rounded border-y-4 border-zinc-100 text-center text-2xl">
                                    <Link
                                        className="block size-full px-5 hover:bg-purple-600 hover:opacity-95"
                                        href="/profile/gyagu"
                                    >
                                        ギャグ
                                    </Link>
                                </Box>
                            </UnorderedList>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
