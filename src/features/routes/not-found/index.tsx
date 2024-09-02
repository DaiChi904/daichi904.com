import Typography from "@/components/element/Typography"
import Container from "@/components/layouts/Container";

export default function NotFoundPageContent() {
    return (
        <Container justifyContent="center" alignItems="center">
            <Typography size="mediumPlus">404 Error - 内容が無いようです...</Typography>
        </Container>
    );
}
