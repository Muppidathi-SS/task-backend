export const ADD_USER = `
  INSERT INTO users (
    name,
    email,
    password
  )
  VALUES ($1, $2, $3)
  RETURNING user_id, name, email, created_at;
`;

export const GET_USER_BY_EMAIL_QUERY = `
  SELECT
    user_id,
    name,
    email,
    password
  FROM users
  WHERE email = $1;
`;