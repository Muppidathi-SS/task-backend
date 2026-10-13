export interface Task {
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string;
}

export interface UpdateTaskPayload {
  user_id: string;
  task_id: string;
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string;
}

export interface TaskPayload {
  user_id: string;
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string;
}

export interface UpdateTask {
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string;
}
