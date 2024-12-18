import { Box } from "@/components/element";
import MyIcon from "@/features/common/MyIcon";

export default function ProfileCard() {
    return (
        <Box className="my-3 flex size-fit max-w-72 flex-col items-center rounded-lg border-2">
            <Box className="min-w-60">
                <MyIcon />
            </Box>
            <table className="my-2 table-auto">
                <thead>
                    <tr>
                        <th>名前</th>
                        <td>DaiChi ( DaiChi904 )</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>出身地</th>
                        <td>広島</td>
                    </tr>
                    <tr>
                        <th>生年月日</th>
                        <td>平成16年9月4日</td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
}
