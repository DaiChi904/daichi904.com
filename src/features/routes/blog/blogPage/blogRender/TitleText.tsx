import styles from "@/styles/blogPage.module.scss";

export default function TitleText({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <h1 className={styles.title}>{children}</h1>;
}
