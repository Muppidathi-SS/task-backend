export const addTaskSwagger = {
  "/api/task": {
    post: {
      summary: "Add a new task",
      tags: ["Tasks"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "user_id",
                "task_name",
                "status",
                "priority",
                "category_name",
                "is_focused",
                "focus_due_date",
              ],
              properties: {
                user_id: {
                  type: "string",
                  format: "uuid",
                  example: "b2104a26-a495-4ffb-a777-caae971b2ef2",
                },
                task_name: {
                  type: "string",
                  example: "Complete REST API Integration",
                },
                status: {
                  type: "string",
                  example: "in_progress",
                },
                priority: {
                  type: "string",
                  example: "high",
                },
                category_name: {
                  type: "string",
                  example: "Work",
                },
                is_focused: {
                  type: "boolean",
                  example: true,
                },
                focus_due_date: {
                  type: "string",
                  format: "date",
                  example: "2026-10-10",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Task added successfully",
        },
        "400": {
          description: "Invalid task data",
        },
        "401": {
          description: "Unauthorized",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};

export const authSwagger = {
  "/api/auth/register": {
    post: {
      summary: "Register a new user",
      tags: ["Authentication"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "email", "password"],
              properties: {
                name: {
                  type: "string",
                  example: "Muppidathi",
                },
                email: {
                  type: "string",
                  format: "email",
                  example: "aadhi@gmail.com",
                },
                password: {
                  type: "string",
                  example: "Password@123",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User registered successfully",
        },
        "409": {
          description: "Email already exists",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },

  "/api/auth/login": {
    post: {
      summary: "Login user",
      tags: ["Authentication"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "aadhi@gmail.com",
                },
                password: {
                  type: "string",
                  example: "Password@123",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Login successful",
        },
        "401": {
          description: "Invalid email or password",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};

export const testSwagger = {
  "/api/test": {
    get: {
      summary: "Test authenticated API",
      tags: ["Test"],
      security: [{ bearerAuth: [] }],
      responses: {
        "200": {
          description: "Authentication successful",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: true,
                  },
                  message: {
                    type: "string",
                    example: "Authentication successful",
                  },
                },
              },
            },
          },
        },
        "401": {
          description: "Unauthorized",
        },
      },
    },
  },
};

export const updateTaskSwagger = {
  "/api/tasks/{task_id}": {
    put: {
      summary: "Update an existing task",
      tags: ["Tasks"],
      parameters: [
        {
          name: "task_id",
          in: "path",
          required: true,
          description: "UUID of the task to update",
          schema: {
            type: "string",
            format: "uuid",
            example: "c3104a26-a495-4ffb-a777-caae971b2ef3",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "task_name",
                "status",
                "priority",
                "category_name",
                "is_focused",
                "focus_due_date",
              ],
              properties: {
                task_name: {
                  type: "string",
                  example: "Complete REST API Integration",
                },
                status: {
                  type: "string",
                  example: "completed",
                },
                priority: {
                  type: "string",
                  example: "high",
                },
                category_name: {
                  type: "string",
                  example: "Work",
                },
                is_focused: {
                  type: "boolean",
                  example: true,
                },
                focus_due_date: {
                  type: "string",
                  format: "date",
                  nullable: true,
                  example: "2026-10-10",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Task updated successfully",
        },
        "400": {
          description: "Invalid task data",
        },
        "401": {
          description: "Unauthorized",
        },
        "404": {
          description: "Task not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};

export const getTasksSwagger = {
  "/api/tasks/{user_id}": {
    get: {
      summary: "Get all tasks by user ID",
      tags: ["Tasks"],
      parameters: [
        {
          name: "user_id",
          in: "path",
          required: true,
          description: "UUID of the user whose tasks should be retrieved",
          schema: {
            type: "string",
            format: "uuid",
            example: "b2104a26-a495-4ffb-a777-caae971b2ef2",
          },
        },
      ],
      responses: {
        "200": {
          description: "Tasks fetched successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: true,
                  },
                  message: {
                    type: "string",
                    example: "Tasks fetched successfully",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        task_id: {
                          type: "string",
                          format: "uuid",
                          example: "c3104a26-a495-4ffb-a777-caae971b2ef3",
                        },
                        user_id: {
                          type: "string",
                          format: "uuid",
                          example: "b2104a26-a495-4ffb-a777-caae971b2ef2",
                        },
                        task_name: {
                          type: "string",
                          example: "Complete REST API Integration",
                        },
                        status: {
                          type: "string",
                          example: "pending",
                        },
                        priority: {
                          type: "string",
                          example: "high",
                        },
                        category_name: {
                          type: "string",
                          example: "Work",
                        },
                        is_focused: {
                          type: "boolean",
                          example: true,
                        },
                        focus_due_date: {
                          type: "string",
                          format: "date",
                          nullable: true,
                          example: "2026-10-10",
                        },
                        created_at: {
                          type: "string",
                          format: "date-time",
                        },
                        updated_at: {
                          type: "string",
                          format: "date-time",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Invalid user ID",
        },
        "401": {
          description: "Unauthorized",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
