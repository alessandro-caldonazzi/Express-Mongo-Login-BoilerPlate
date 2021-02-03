<a name="top"></a>
# Express mongo login boilerplate v1.0.0

A boilerplate for your node API

 - [Auth](#Auth)
   - [Google redirect user here after successful login](#Google-redirect-user-here-after-successful-login)
   - [Login](#Login)
   - [Refresh](#Refresh)
   - [Register](#Register)
   - [Reset password step 1](#Reset-password-step-1)
   - [Reset password step 2](#Reset-password-step-2)

___


# <a name='Auth'></a> Auth

## <a name='Google-redirect-user-here-after-successful-login'></a> Google redirect user here after successful login
[Back to top](#top)

<p>Confirm login google</p>

```
GET auth/successful-google-login
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>User's email</p>_Size range: 6..128_<br> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |

## <a name='Login'></a> Login
[Back to top](#top)

<p>Login user given username and password</p>

```
POST auth/login
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>User's nikname</p>_Size range: 3..128_<br> |
| password | `String` | <p>User's password</p>_Size range: 6..128_<br> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| jwt | `String` | <p>Authorization Token (Json Web Token)</p> |
| refreshToken | `String` | <p>Token to get a new accessToken</p> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |

## <a name='Refresh'></a> Refresh
[Back to top](#top)

<p>Calculate new JWT from refresh token</p>

```
POST auth/refresh
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| refreshToken | `String` | <p>refresh token</p>_Size range: 3.._<br> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| jwt | `String` | <p>Authorization Token (Json Web Token)</p> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |

## <a name='Register'></a> Register
[Back to top](#top)

<p>Register a new user</p>

```
POST auth/register
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>User's nikname</p>_Size range: 3..128_<br> |
| email | `String` | <p>User's email</p>_Size range: 6..128_<br> |
| password | `String` | <p>User's password</p>_Size range: 6..128_<br> |

### Success response

#### Success response - `Created 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| jwt | `String` | <p>Authorization Token (Json Web Token)</p> |
| refreshToken | `String` | <p>Token to get a new accessToken</p> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |

## <a name='Reset-password-step-1'></a> Reset password step 1
[Back to top](#top)

<p>Send token to reset password via email</p>

```
POST auth/send-reset-token
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>User's email</p>_Size range: 6..128_<br> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |

## <a name='Reset-password-step-2'></a> Reset password step 2
[Back to top](#top)

<p>Change password with new password if token is valid</p>

```
POST auth/change-password
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| newPassword | `String` | <p>New user password</p>_Size range: 6..128_<br> |
| token | `String` | <p>reset token received via email</p>_Size range: 8_<br> |

### Error response

#### Error response - `Bad Request 400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ValidationError |  | <p>Some parameters may contain invalid values</p> |
