import { Box } from "@/components/element";

import ContentsWithAnimation from "./contentsWithAnimation";
import Footer from "./footer";
import Header from "./header";

export default function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Box className="flex max-h-full min-h-screen w-screen flex-col justify-between">
            <Header />
            <ContentsWithAnimation>{children}</ContentsWithAnimation>
            <Footer />
        </Box>
    );
}
