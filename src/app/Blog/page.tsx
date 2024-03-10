import Footer from "../components/footer";
import Header from "../components/header";

function Blog() {
    return(
        <>
            <div className="flex flex-col h-screen items-center justify-between">
                <div className="flex">
                    <Header />
                </div>
                <main className="flex">
                    <h1 className="text-4xl">無いです。</h1>
                </main>
                <div className="mb-3">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Blog;