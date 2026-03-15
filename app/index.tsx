import { router } from 'expo-router';
import { Button, Surface, Text } from 'react-native-paper';


export default function HomeScreen() {

  const handleStartQuiz = () => {

    router.push('/quiz'); 
  }


  return (
    <Surface style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button icon="play"  mode="contained" onPress={handleStartQuiz}>ጀምር ፈተና  </Button>
    </Surface>

    
  );
}


