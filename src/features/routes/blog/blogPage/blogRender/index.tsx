import Chip from "@/components/element/chip/Chip";
import ChipGroup from "@/components/element/chip/ChipGroup";
import styles from "@/styles/blogPage.module.scss";
import { Blog } from "@/types/blog.types";

import BodyDisplay from "./BodyDisplay";
import DateDisplay from "./DateDisplay";
import TitleText from "./TitleText";

export default function BlogRender({ blog }: { blog: Blog }) {
    const { tags, title, publishedAt, revisedAt, body } = blog;
    return (
        <main className={styles.main}>
            <ChipGroup>{tags?.map((tag) => <Chip key={tag} label={tag} className="m-0.5" />)}</ChipGroup>
            <TitleText>{title}</TitleText>
            <DateDisplay publishedAt={publishedAt} revisedAt={revisedAt} />
            <BodyDisplay body={body} />
        </main>
    );
}
