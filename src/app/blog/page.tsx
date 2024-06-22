import BaseLayout from "@/layouts/BaseLayout";

function Blog() {
    return (
        <>
            <BaseLayout>
                <main className="flex grow items-center justify-center">
                    <h1 className="text-4xl">気が向いたら書きます。</h1>
                </main>
            </BaseLayout>
        </>
    );
}

export default Blog;
