
import create from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  selectedTask: null,
  setTasks: (tasks) => set({ tasks }),
  setSelectedTask: (task) => set({ selectedTask: task }),

}));

export default useTaskStore;
