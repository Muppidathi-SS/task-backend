export const ADD_TASK_QUERY = `
INSERT INTO tasks (user_id, task_name, status, priority, category_name, is_focused, focus_due_date)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *
`;
