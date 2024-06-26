export default function Introduction() {
    return (
        <div className="m-3 flex flex-col">
            <h1 className="text-3xl">ひとこと</h1>
            <p className="text-lg">広島出身の、地方の国立大学に通うしがない大学生です。情報系の勉強をしています。</p>
            <p className="text-lg">最近はフロントエンドをメインにこねこねしています。</p>
            <p className="text-lg">
                趣味はゲームや音楽を聴くことで、最近は料理にはまっています。下に自分の好きな音楽をいくつか載せておきます。特に、「ただ、透明」は個人的に一番好きな歌です。是非聴いてみてください。
            </p>

            <ol className="m-5">
                <li>ユノギシロ - ただ、透明</li>
                <li>miwa - ヒカリへ</li>
                <li>こはならむ - 10年後の私になら</li>
            </ol>
        </div>
    );
}
