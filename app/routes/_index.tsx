import type { MetaFunction } from "@remix-run/node";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Sync-gantt" },
  ];
};

const tasks = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 9),
    name: "Project Management",
    id: "Task 0",
    type: "task",
    progress: 80,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 3),
    end: new Date(2020, 1, 7),
    name: "Employee Management",
    id: "Task 1",
    type: "task",
    progress: 50,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
];

export default function Index() {
  return (
    <Gantt
      tasks={tasks}
      // Handle date change events
      onDateChange={(task, children) => {
        const newTasks = tasks.map(t => t.id === task.id ? task : t);
        console.log("Date changed:", newTasks);
      }}
      // Handle task deletion events
      onTaskDelete={(task) => {
        const newTasks = tasks.filter(t => t.id !== task.id);
        console.log("Task deleted:", newTasks);
      }}
      // Handle progress change events
      onProgressChange={(task, children) => {
        const newTasks = tasks.map(t => t.id === task.id ? task : t);
        console.log("Progress changed:", newTasks);
      }}
      // Handle double-click events
      onDoubleClick={(task) => {
        console.log("Task double-clicked:", task);
      }}
      // Handle click events
      onClick={(task) => {
        console.log("Task clicked:", task);
      }}
    />
  );
}
