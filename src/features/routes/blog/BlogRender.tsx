import Chip from "@/components/element/chip/Chip";
import ChipGroup from "@/components/element/chip/ChipGroup";
import styles from "@/styles/blogPage.module.scss";
import { Blog } from "@/types/blog.types";

export default function BlogRender({ blog }: { blog: Blog }) {
    return (
        <main className={styles.main}>
            <ChipGroup>{blog.tags?.map((tag) => <Chip key={tag} label={tag} className="m-0.5" />)}</ChipGroup>
            <h1 className={styles.title}>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
                className={styles.post}
            />
        </main>
    );
}
