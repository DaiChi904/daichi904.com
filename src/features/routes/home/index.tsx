import Link from "next/link";

import Typography from "@/components/element/Typography";

import Container from "../../../components/layouts/Container";
import Clock from "../../common/Clock";

export default function HomePageContent() {
    return (
        <Container alignItems="center" justifyContent="center">
            <Typography size="large" margin="my-2">
                DaiChi
            </Typography>

            <Clock mode={"nomal"} />

            <div className="my-10 flex items-center justify-center">
                <ul className="mx-2 rounded border-y-4 border-zinc-100 text-center text-xl l-sm:text-2xl">
                    <Link className="block size-full px-5 hover:bg-purple-600 hover:opacity-95" href="/profile">
                        About Me
                    </Link>
                </ul>
            </div>
        </Container>
    );
}
