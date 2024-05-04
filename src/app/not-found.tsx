import BaseLayout from "@/layouts/BaseLayout";

function Custom404() {
    return(
        <>
            <BaseLayout>
                <main className="flex grow justify-center items-center">
                    <h1 className="text-4xl">404 Error - 内容が無いようです...</h1>
                </main>
            </BaseLayout>
        </>
    );
}

export default Custom404;