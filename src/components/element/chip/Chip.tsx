import Typography from "../Typography";

interface Props {
    label: string;
    className?: string;
}

export default function Chip({ label, className }: Props) {
    return (
        <div className={`block w-fit rounded-xl border-black/90 bg-white ${className}`}>
            <Typography size="small" textAlign="center" className={`${className} px-1.5 py-0.5 text-black`}>
                {label}
            </Typography>
        </div>
    );
}
