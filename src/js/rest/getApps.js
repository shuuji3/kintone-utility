import sendRequest from './common/sendRequest';

/** Function: getApps
 *  @param {object} [params]
 *  @param {number[]} [params.ids]
 *  @param {string[]} [params.codes]
 *  @param {string} [params.name]
 *  @param {number[]} [params.spaceIds]
 *  @param {number} [params.limit]
 *  @param {number} [params.offset]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    const param = {
        ids: params.ids || [],
        codes: params.codes || [],
        name: params.name || '',
        spaceIds: params.spaceIds || [],
        limit: params.limit || 100,
        offset: params.offset || 0
    };
    const isGuest = params && Boolean(params.isGuest) || false;

    return sendRequest('/k/v1/apps', 'GET', param, isGuest);
};
