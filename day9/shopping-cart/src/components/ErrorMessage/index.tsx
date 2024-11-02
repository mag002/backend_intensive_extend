import { Box, Button } from "@mui/material";

export default function ErrorMessage({ handleRetry }: { handleRetry: () => void }) {
    return <Box>
        <h2>Something went wrong, please try again!!!</h2>
        <Button onClick={handleRetry}>Retry</Button>
    </Box>
}