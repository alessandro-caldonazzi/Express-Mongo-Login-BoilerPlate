<a name="top"></a>
# API v1.0.0

API docs for Express-Mongo-Login-BoilerPlate

 - [Auth](#Auth)
   - [Google redirect URI](#Google-redirect-user-here-after-successful-login)
   - [Login](#Login)
   - [Refresh](#Refresh)
   - [Register](#Register)
   - [Reset password](#Reset-password)

___


# <a name='Auth'></a> Auth

## <a name='Register'></a> Register

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

## <a name='Reset-password'></a> Reset password
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

## <a name='Google-redirect-user-here-after-successful-login'></a> Google redirect URI
[Back to top](#top)

<p>Confirm login google</p>

```
GET auth/ssuccessful-google-login
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