export const DASHBOARD_HEADER = `
SELECT
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE status = 'completed') AS completed,
    COUNT(*) FILTER (WHERE status = 'pending') AS pending,
    COUNT(*) FILTER (WHERE status = 'in_progress') AS in_progress
FROM tasks
WHERE user_id =  $1;
`;