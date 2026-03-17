import { Surface, Text, Button } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ResultsScreen() {
    const { score, total } = useLocalSearchParams();
    const router = useRouter();

    return (
        <Surface
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
                Results
            </Text>

            <Text variant="titleLarge">
                {score}/{total}
            </Text>

            <Button
                mode="contained"
                style={{ marginTop: 20 }}
                onPress={() => router.replace("/")}
            >
                Play Again
            </Button>
        </Surface>
    );
}