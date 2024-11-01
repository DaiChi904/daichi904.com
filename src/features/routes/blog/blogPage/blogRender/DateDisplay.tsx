import Box from "@/components/element/Box";
import Typography from "@/components/element/Typography";
import getFormattedDateString from "@/utils/getFormattedDateString";

interface Props {
    publishedAt: string;
    revisedAt: string;
}

export default function DateDisplay({ publishedAt, revisedAt }: Props) {
    return (
        <Box className="flex flex-col items-end">
            <Typography size="small">公開日: {getFormattedDateString(publishedAt)}</Typography>
            <Typography size="small">
                {getFormattedDateString(publishedAt) !== getFormattedDateString(revisedAt) &&
                    `最終更新日: ${getFormattedDateString(revisedAt)}`}
            </Typography>
        </Box>
    );
}
