import { Surface, Text } from "react-native-paper";

type Question = {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: number;
};

type CardComponentProps = {
  data: Question;
};

export default function CardComponent({ data }: CardComponentProps) {
  return (
    <Surface style={{ padding: 20, margin: 10, borderRadius: 8, elevation: 4 }}>
      <Text variant="titleMedium">{data.questionText}</Text>
    </Surface>
  );
}