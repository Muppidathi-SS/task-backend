export const ADD_TASK_QUERY = `
INSERT INTO tasks (user_id, task_name, status, priority, category_name, is_focused, focus_due_date)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *
`;

export const UPDATE_TASK_QUERY = `
UPDATE tasks
SET
    task_name = $3,
    status = $4,
    priority = $5,
    category_name = $6,
    is_focused = $7,
    focus_due_date = $8,
    updated_at = CURRENT_TIMESTAMP
WHERE task_id = $2
AND user_id = $1
RETURNING *
`;

export const GET_TASK_QUERY = `
SELECT * FROM tasks
WHERE user_id = $1
`;

export const DELETE_TASK_QUERY = `
DELETE FROM tasks
WHERE user_id = $1 and task_id = $2
`;