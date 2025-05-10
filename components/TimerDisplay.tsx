import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import timerDisplayStyles from './styles/timerDisplayStyles';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerDisplayProps {
  timeLeft: TimeLeft;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  
  // Format time with leading zeros
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };
  

  return (
    <View style={styles.curvedBackground}>
      <View style={styles.timerContainer}>
        <Ionicons name="time-outline" size={20} color="#000" />
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timeLeft.hours)}</Text>
        </View>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timeLeft.minutes)}</Text>
        </View>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timeLeft.seconds)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(timerDisplayStyles);

