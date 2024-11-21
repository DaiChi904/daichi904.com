import { Box, Typography } from "@/components/element";
import { ListItem, OrderedList } from "@/components/element/list";

export default function Introduction() {
    return (
        <Box className="m-3 flex flex-col">
            <Typography size="medium">ひとこと</Typography>
            <Typography size="defaultPlus">
                広島出身の、地方の国立大学に通うしがない大学生です。コンピュータサイエンスの勉強をしています。
            </Typography>
            <Typography size="defaultPlus">
                最近はインターンを2つ掛け持ちしながら、フロントエンドをメインにこねこねしています。
            </Typography>
            <Typography size="defaultPlus">
                趣味はゲームや音楽を聴くことで、最近は料理にはまっています。下に自分の好きな音楽をいくつか載せておきます。特に、「ただ、透明」は個人的に一番好きな歌です。是非聴いてみてください。
            </Typography>

            <OrderedList type={"1"}>
                <ListItem>ユノギシロ - ただ、透明</ListItem>
                <ListItem>miwa - ヒカリへ</ListItem>
                <ListItem>こはならむ - 10年後の私になら</ListItem>
            </OrderedList>
        </Box>
    );
}
