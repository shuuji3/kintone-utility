import getApps from './getApps';

/** Function: getAllApps
 *  @param {object} [params]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {

    const apps = [];

    const getAll = (beginNum) => {
        let begin = beginNum || 0;
        const isGuest = params && Boolean(params.isGuest) || false;
        const param = {
            isGuest,
            offset: begin
        };

        return getApps(param).then((response) => {
            apps.push(...response.apps);
            begin += response.apps.length;
            if (response.apps.length === 0) {
                return { apps };
            }
            return getAll(begin);
        });
    };

    return getAll();
};
