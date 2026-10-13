export const addTaskSwagger = {
  "/api/task": {
    post: {
      summary: "Add a new task",
      description:
        "Creates a new task for the authenticated user. The user ID is extracted from the JWT token, so it should not be included in the request body.",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],

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
                  description: "Name of the task",
                },
                status: {
                  type: "string",
                  example: "in_progress",
                  description: "Current status of the task",
                },
                priority: {
                  type: "string",
                  example: "high",
                  description: "Priority of the task",
                },
                category_name: {
                  type: "string",
                  example: "Work",
                  description: "Category assigned to the task",
                },
                is_focused: {
                  type: "boolean",
                  example: true,
                  description: "Whether the task is marked as focused",
                },
                focus_due_date: {
                  type: "string",
                  format: "date",
                  nullable: true,
                  example: "2026-10-20",
                  description: "Due date for the focused task",
                },
              },
            },
            example: {
              task_name: "Complete REST API Integration",
              status: "in_progress",
              priority: "high",
              category_name: "Work",
              is_focused: true,
              focus_due_date: "2026-10-20",
            },
          },
        },
      },

      responses: {
        "200": {
          description: "Task added successfully",
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
                    example: "Task Added successfully",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        task_id: {
                          type: "string",
                          format: "uuid",
                          example: "d2104a26-a495-4ffb-a777-caae971b2ef2",
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
                          nullable: true,
                          example: "2026-10-20",
                        },
                      },
                    },
                  },
                },
              },
              example: {
                success: true,
                message: "Task Added successfully",
                data: [
                  {
                    task_id: "d2104a26-a495-4ffb-a777-caae971b2ef2",
                    user_id: "b2104a26-a495-4ffb-a777-caae971b2ef2",
                    task_name: "Complete REST API Integration",
                    status: "in_progress",
                    priority: "high",
                    category_name: "Work",
                    is_focused: true,
                    focus_due_date: "2026-10-20",
                  },
                ],
              },
            },
          },
        },

        "400": {
          description:
            "Invalid task data, missing required fields, or invalid date format",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: false,
                  },
                  message: {
                    type: "string",
                    example: "Invalid task data",
                  },
                },
              },
              example: {
                success: false,
                message: "Invalid task data",
              },
            },
          },
        },

        "401": {
          description: "Unauthorized - missing, invalid, or expired JWT token",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Unauthorized",
              },
            },
          },
        },

        "403": {
          description:
            "Forbidden - authenticated user does not have permission",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Forbidden",
              },
            },
          },
        },

        "404": {
          description: "Referenced resource not found, if applicable",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Resource not found",
              },
            },
          },
        },

        "409": {
          description: "Conflict with existing data, if applicable",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Conflict with existing data",
              },
            },
          },
        },

        "500": {
          description: "Internal server or database error",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Internal server error",
              },
            },
          },
        },
      },
    },
  },
};

export const updateTaskSwagger = {
  "/api/tasks/{task_id}": {
    put: {
      summary: "Update an existing task",
      description:
        "Updates a task belonging to the authenticated user. The user ID is extracted from the JWT token.",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],

      parameters: [
        {
          name: "task_id",
          in: "path",
          required: true,
          description: "UUID of the task to update",
          schema: {
            type: "string",
            format: "uuid",
          },
          example: "d2104a26-a495-4ffb-a777-caae971b2ef2",
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
                  description: "Updated task name",
                },
                status: {
                  type: "string",
                  example: "completed",
                  description: "Updated task status",
                },
                priority: {
                  type: "string",
                  example: "high",
                  description: "Updated task priority",
                },
                category_name: {
                  type: "string",
                  example: "Work",
                  description: "Updated task category",
                },
                is_focused: {
                  type: "boolean",
                  example: true,
                  description: "Whether the task is marked as focused",
                },
                focus_due_date: {
                  type: "string",
                  format: "date",
                  nullable: true,
                  example: "2026-10-20",
                  description: "Updated due date for the task",
                },
              },
            },
            example: {
              task_name: "Complete REST API Integration",
              status: "completed",
              priority: "high",
              category_name: "Work",
              is_focused: true,
              focus_due_date: "2026-10-20",
            },
          },
        },
      },

      responses: {
        "200": {
          description: "Task updated successfully",
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
                    example: "Task Updated successfully",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        task_id: {
                          type: "string",
                          format: "uuid",
                          example: "d2104a26-a495-4ffb-a777-caae971b2ef2",
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
                          example: "2026-10-20",
                        },
                      },
                    },
                  },
                },
              },
              example: {
                success: true,
                message: "Task Updated successfully",
                data: [
                  {
                    task_id: "d2104a26-a495-4ffb-a777-caae971b2ef2",
                    user_id: "b2104a26-a495-4ffb-a777-caae971b2ef2",
                    task_name: "Complete REST API Integration",
                    status: "completed",
                    priority: "high",
                    category_name: "Work",
                    is_focused: true,
                    focus_due_date: "2026-10-20",
                  },
                ],
              },
            },
          },
        },

        "400": {
          description:
            "Invalid task ID, invalid request data, or invalid date format",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Invalid task data",
              },
            },
          },
        },

        "401": {
          description: "Unauthorized - missing, invalid, or expired JWT token",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Unauthorized",
              },
            },
          },
        },

        "403": {
          description: "Forbidden - insufficient permissions",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Forbidden",
              },
            },
          },
        },

        "404": {
          description: "Task not found or not accessible to the user",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Task not found",
              },
            },
          },
        },

        "500": {
          description: "Internal server or database error",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Internal server error",
              },
            },
          },
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
                  example: "test@gmail.com",
                },
                password: {
                  type: "string",
                  example: "test@123",
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
                  example: "test@gmail.com",
                },
                password: {
                  type: "string",
                  example: "test@123",
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

export const getTaskSwagger = {
  "/api/tasks": {
    get: {
      summary: "Get all tasks for the authenticated user",
      description:
        "Fetches all tasks belonging to the authenticated user using the user ID extracted from the JWT token.",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],

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
                    example: "Task Fetched Successfully",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        task_id: {
                          type: "string",
                          format: "uuid",
                          example: "d2104a26-a495-4ffb-a777-caae971b2ef2",
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
                          nullable: true,
                          example: "2026-10-20",
                        },
                        created_at: {
                          type: "string",
                          format: "date-time",
                          example: "2026-10-13T10:30:00.000Z",
                        },
                        updated_at: {
                          type: "string",
                          format: "date-time",
                          example: "2026-10-13T11:00:00.000Z",
                        },
                      },
                    },
                  },
                },
              },
              example: {
                success: true,
                message: "Task Fetched Successfully",
                data: [
                  {
                    task_id: "d2104a26-a495-4ffb-a777-caae971b2ef2",
                    user_id: "b2104a26-a495-4ffb-a777-caae971b2ef2",
                    task_name: "Complete REST API Integration",
                    status: "in_progress",
                    priority: "high",
                    category_name: "Work",
                    is_focused: true,
                    focus_due_date: "2026-10-20",
                    created_at: "2026-10-13T10:30:00.000Z",
                    updated_at: "2026-10-13T11:00:00.000Z",
                  },
                ],
              },
            },
          },
        },

        "401": {
          description: "Unauthorized - missing, invalid, or expired JWT token",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Unauthorized",
              },
            },
          },
        },

        "403": {
          description: "Forbidden - insufficient permissions",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Forbidden",
              },
            },
          },
        },

        "500": {
          description: "Internal server or database error",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Internal server error",
              },
            },
          },
        },
      },
    },
  },
};

export const deleteTaskSwagger = {
  "/api/tasks/{task_id}": {
    delete: {
      summary: "Delete a task",
      description:
        "Deletes a task belonging to the authenticated user. The user ID is extracted from the JWT token.",
      tags: ["Tasks"],
      security: [{ bearerAuth: [] }],

      parameters: [
        {
          name: "task_id",
          in: "path",
          required: true,
          description: "UUID of the task to delete",
          schema: {
            type: "string",
            format: "uuid",
          },
          example: "d2104a26-a495-4ffb-a777-caae971b2ef2",
        },
      ],

      responses: {
        "200": {
          description: "Task deleted successfully",
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
                    example: "Task Deleted Successfully",
                  },
                },
              },
              example: {
                success: true,
                message: "Task Deleted Successfully",
              },
            },
          },
        },

        "400": {
          description: "Invalid task ID",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Invalid task ID",
              },
            },
          },
        },

        "401": {
          description: "Unauthorized - missing, invalid, or expired JWT token",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Unauthorized",
              },
            },
          },
        },

        "403": {
          description: "Forbidden - insufficient permissions",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Forbidden",
              },
            },
          },
        },

        "404": {
          description: "Task not found or not accessible to the user",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Task not found",
              },
            },
          },
        },

        "500": {
          description: "Internal server or database error",
          content: {
            "application/json": {
              example: {
                success: false,
                message: "Internal server error",
              },
            },
          },
        },
      },
    },
  },
};
