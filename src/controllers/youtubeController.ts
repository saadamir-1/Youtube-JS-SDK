/**
 * Youtube-appLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Error400Error } from '../errors/error400Error';
import { number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class YoutubeController extends BaseController {
  /**
   * endpoint for youtube app
   *
   * @param q          Example: Hello
   * @param maxResults Example: 5
   * @param part       This searches the term
   * @return Response from the API call
   */
  async youtube(
    q: string,
    maxResults?: number,
    part?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/');
    const mapped = req.prepareArgs({
      q: [q, string()],
      maxResults: [maxResults, optional(number())],
      part: [part, optional(string())],
    });
    req.query('q', mapped.q);
    req.query('maxResults', mapped.maxResults);
    req.query('part', mapped.part);
    req.throwOn(400, Error400Error, 'apni authentication key check kr k aa chacha');
    return req.callAsJson(unknown(), requestOptions);
  }
}
