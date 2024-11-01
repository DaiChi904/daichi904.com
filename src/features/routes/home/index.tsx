import Link from "next/link";

import { Box, Typography } from "@/components/element";
import { Container } from "@/components/layouts";
import { Clock } from "@/features/common";

export default function HomePageContent() {
    return (
        <Container alignItems="center" justifyContent="center">
            <Typography size="large">DaiChi</Typography>

            <Clock mode={"nomal"} />

            <Box className="my-10 flex items-center justify-center">
                <Box className="mx-2 rounded border-y-4 border-zinc-100">
                    <Link className="block size-full px-5 hover:bg-purple-600 hover:opacity-95" href="/profile">
                        About Me
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}
