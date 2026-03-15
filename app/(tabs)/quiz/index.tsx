import { useEffect } from "react";
import { getQuestions } from "../../../services/questions";
import { Button, Surface, Text } from "react-native-paper";
import { useState } from "react";
import { Question } from "@/types/questiontypes";
import { router } from "expo-router";


export default function QuizScreen() {

    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const load = async () => {
            const questions = await getQuestions();
            console.log(questions);
        };

        load();
        
    }, []);

    return (
        <Surface style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Quiz</Text>

            <Button icon="play"  mode="contained" onPress={() => {router.push('/results')}}>
                Results
            </Button>
            {questions.map((question) => (
                <Text key={question.id}>{question.text}</Text>
            ))}
        </Surface>
    );

}
