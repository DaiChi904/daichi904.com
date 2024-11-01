import Typography from "../Typography";

interface Props {
    label: string;
    className?: string;
}

export default function Chip({ label, className }: Props) {
    return (
        <div className={`block w-fit rounded-md border-black/90 bg-white/25 ${className}`}>
            <Typography size="small" textAlign="center" className={`${className} px-1.5 py-0.5 text-white`}>
                {label}
            </Typography>
        </div>
    );
}
