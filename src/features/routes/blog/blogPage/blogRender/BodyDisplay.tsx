import styles from "@/styles/blogPage.module.scss";

export default function BodyDisplay({ body }: { body: string }) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `${body}`,
            }}
            className={styles.post}
        />
    );
}
