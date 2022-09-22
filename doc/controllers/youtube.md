# Youtube

```ts
const youtubeController = new YoutubeController(client);
```

## Class Name

`YoutubeController`


# Youtube

endpoint for youtube app

```ts
async youtube(
  q: string,
  maxResults?: number,
  part?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `q` | `string` | Query, Required | - |
| `maxResults` | `number \| undefined` | Query, Optional | **Default**: `5`<br>**Constraints**: `>= 1`, `<= 5` |
| `part` | `string \| undefined` | Query, Optional | This searches the term<br>**Default**: `'snippet'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const q = 'Hello';
const maxResults = 5;
const part = 'snippet';
try {
  const { result, ...httpResponse } = await youtubeController.youtube(q, maxResults, part);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | apni authentication key check kr k aa chacha | [`Error400Error`](../../doc/models/error-400-error.md) |

