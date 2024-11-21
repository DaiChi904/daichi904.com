import { BaseLayout } from "@/components/layouts";
import NotFoundPageContent from "@/features/routes/not-found";

export default function Custom404() {
    return (
        <BaseLayout>
            <NotFoundPageContent />
        </BaseLayout>
    );
}
