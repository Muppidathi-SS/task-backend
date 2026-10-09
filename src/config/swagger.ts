import swaggerJSDoc from "swagger-jsdoc";
import {
  addTaskSwagger,
  authSwagger,
  testSwagger,
} from "../swagger/swagger-ui";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Task Tracker API",
      version: "1.0.0",
      description: "Task Tracker Backend API",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    paths: {
      ...addTaskSwagger,
      ...testSwagger,
      ...authSwagger,
    },
  },

  apis: ["./src/routes/*.ts"],
});
