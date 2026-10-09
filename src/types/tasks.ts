export interface Task {
  user_id: string;
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string;
}
