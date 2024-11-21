import { Box, Typography } from "@/components/element";
import { ListItem, OrderedList } from "@/components/element/list";
import Container from "@/components/layouts/Container";

import { gyagus } from "./gyagus";

export default function GyaguPageContent() {
    return (
        <Container justifyContent="center">
            <Box className="flex w-11/12 justify-center">
                <Box className="flex flex-col items-center">
                    <Typography size="mediumPlus">ギャグ一覧</Typography>
                    <OrderedList type="1">
                        {gyagus.map((gyagu) => (
                            <ListItem key={gyagu}>
                                <Typography size="medium">{gyagu}</Typography>
                            </ListItem>
                        ))}
                    </OrderedList>
                </Box>
            </Box>
        </Container>
    );
}
