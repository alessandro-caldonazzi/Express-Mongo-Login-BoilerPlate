define({ "api": [
  {
    "type": "post",
    "url": "auth/register",
    "title": "Register",
    "description": "<p>Register a new user</p>",
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Token to get a new accessToken after expiration time</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.timezone",
            "description": "<p>The server's Timezone</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "API/src/routes/auth.js",
    "groupTitle": "Auth"
  }
] });
