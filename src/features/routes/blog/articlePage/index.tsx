import Chip from "@/components/element/chip/Chip";
import ChipGroup from "@/components/element/chip/ChipGroup";
import Typography from "@/components/element/Typography";
import Container from "@/components/layouts/Container";
import { Article } from "@/types/article.types";

export default function ArticlePageContent({ article }: { article: Article }) {
    return (
        <Container>
            <ChipGroup>{article.tags?.map((tag) => <Chip key={tag} label={tag} className="m-0.5" />)}</ChipGroup>
            <Typography size="large">{article.title}</Typography>
            <Typography>{article.content}</Typography>
        </Container>
    );
}
