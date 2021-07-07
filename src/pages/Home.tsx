import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import ThemeButton from '../components/ThemeButton';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface HomeProps {
  handleTheme?: () => void;
}

export function Home({ handleTheme }: HomeProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (!(newTaskTitle.length > 0)) return;

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const aTask = tasks.filter((task: Task) => task.id === id);
    const data = {
      id: aTask[0].id,
      title: aTask[0].title,
      done: !aTask[0].done
    }

    const nTask = tasks.filter((task: Task) => task.id !== id);
    setTasks([...nTask, data]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState: Task[]) => oldState.filter((task: Task) => task.id !== id));
  }

  return (
    <View style={{ backgroundColor: useTheme().colors.background, flex: 1, }}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />

      <ThemeButton onPress={handleTheme} />
    </View>
  )
}