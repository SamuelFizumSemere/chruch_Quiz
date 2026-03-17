import { useEffect } from "react";
import { router } from "expo-router";
import { Button, Surface, Text } from "react-native-paper";
import { auth } from "../firebase/config"; // your Firebase config
import { onAuthStateChanged } from "firebase/auth";

export default function HomeScreen() {

  useEffect(() => {
    // check if user is logged in when screen loads
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // not logged in → send to login page
        router.replace("/login"); // replace so user can't go back
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleStartQuiz = () => {
    router.push("/quiz"); 
  };

  return (
    <Surface style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Bible Quiz</Text>
      <Button icon="play" mode="contained" onPress={handleStartQuiz}>
        ጀምር ፈተና
      </Button>
    </Surface>
  );
}