import { ReactNode } from "react";

import Typography from "@/components/element/Typography";

import { Grid } from "../../components/element/grid";

interface Props {
    icon: JSX.Element;
    itemTitle: string;
    itemContent: ReactNode;
}

export default function Item({ icon, itemTitle, itemContent }: Props) {
    return (
        <Grid className="grid-flow-row grid-cols-5 border-y-2 py-2">
            <Grid className="col-span-1 row-span-2 items-center justify-center">{icon}</Grid>
            <Grid className="col-span-4 items-center">
                <Typography size="medium" textAlign="center">
                    {itemTitle}
                </Typography>
            </Grid>
            <Grid className="col-span-4 mt-2 items-center justify-center">{itemContent}</Grid>
        </Grid>
    );
}
