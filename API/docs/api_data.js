define({ "api": [
  {
    "type": "get",
    "url": "auth/successful-google-login",
    "title": "Google redirect user here after successful login",
    "description": "<p>Confirm login google</p>",
    "version": "1.0.0",
    "name": "Google_login",
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
            "size": "6..128",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
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
  },
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login",
    "description": "<p>Login user given username and password</p>",
    "version": "1.0.0",
    "name": "Login",
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
            "size": "3..128",
            "optional": false,
            "field": "username",
            "description": "<p>User's nikname</p>"
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Authorization Token (Json Web Token)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accessToken</p>"
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
  },
  {
    "type": "post",
    "url": "auth/refresh",
    "title": "Refresh",
    "description": "<p>Calculate new JWT from refresh token</p>",
    "version": "1.0.0",
    "name": "Refresh",
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
            "size": "3..",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>refresh token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Authorization Token (Json Web Token)</p>"
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
  },
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
            "size": "3..128",
            "optional": false,
            "field": "username",
            "description": "<p>User's nikname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
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
            "field": "jwt",
            "description": "<p>Authorization Token (Json Web Token)</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token to get a new accessToken</p>"
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
  },
  {
    "type": "post",
    "url": "auth/change-password",
    "title": "Reset password step 2",
    "description": "<p>Change password with new password if token is valid</p>",
    "version": "1.0.0",
    "name": "Reset_Password",
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
            "size": "6..128",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8",
            "optional": false,
            "field": "token",
            "description": "<p>reset token received via email</p>"
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
  },
  {
    "type": "post",
    "url": "auth/send-reset-token",
    "title": "Reset password step 1",
    "description": "<p>Send token to reset password via email</p>",
    "version": "1.0.0",
    "name": "Reset_Password_Token",
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
            "size": "6..128",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
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
