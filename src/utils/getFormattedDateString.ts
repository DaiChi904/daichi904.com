export default function getFormattedDateString(dateString: string) {
    const time = new Date(dateString);
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    return `${year}年${month + 1}月${day}日`;
}
