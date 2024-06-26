import MyIcon from "./../../components/myIcon";

export default function ProfileCard() {
    return (
        <div className="my-3 flex size-fit max-w-72 flex-col items-center rounded-lg border-2">
            <div className="min-w-60">
                <MyIcon />
            </div>
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
        </div>
    );
}
