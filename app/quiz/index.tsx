import { Question } from "@/types/questiontypes";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Surface, Text } from "react-native-paper";
import { getQuestions } from "../../services/questions";

export default function QuizScreen() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: number }>({});

    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const fetchedQuestions = await getQuestions();
            setQuestions(fetchedQuestions);
        };

        load();
    }, []);

    const handleAnswer = (questionId: string, selectedOption: number) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: selectedOption,
        }));
    };

    const currentQuestion = questions[currentIndex];
    const selectedAnswer = currentQuestion
        ? answers[currentQuestion.id]
        : undefined;
    const handleNext = () => {
        if (!currentQuestion) return;

        if (selectedAnswer === undefined) {
            console.log("Answer first bro");
            return;
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            let score = 0;

            questions.forEach((q) => {
                if (answers[q.id] === q.correctAnswer) {
                    score++;
                }
            });

            router.push({
                pathname: "/results",
                params: {
                    score: score.toString(),
                    total: questions.length.toString(),
                },
            });
        }
    };

    return (
        <Surface
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
            }}
        >
            <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
                Quiz
            </Text>

            {currentQuestion ? (
                <Surface
                    style={{
                        width: "100%",
                        padding: 20,
                        marginBottom: 20,
                        borderRadius: 8,
                        elevation: 4,
                    }}
                >
                    <Text variant="titleMedium" style={{ marginBottom: 10 }}>
                        {currentQuestion.questionText}
                    </Text>

                    {currentQuestion.options.map((opt, index) => {
                        const isSelected = selectedAnswer === index;

                        return (
                            <Button
                                key={index}
                                mode={isSelected ? "contained" : "outlined"}
                                style={{ marginTop: 8 }}
                                onPress={() =>
                                    handleAnswer(currentQuestion.id, index)
                                }
                            >
                                {opt}
                            </Button>
                        );
                    })}
                </Surface>
            ) : (
                <Text>Loading...</Text>
            )}

            <Button mode="contained" onPress={handleNext}>
                {currentIndex === questions.length - 1
                    ? "Finish"
                    : "Next"}
            </Button>
        </Surface>
    );
}