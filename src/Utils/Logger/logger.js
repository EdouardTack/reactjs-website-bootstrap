import { debug } from '@src/Resources/Env';
import { collapsed, colors, logger, timestamp } from './defaults';
import { getType, getTitle } from './helpers';

/**
 * @param options
 * @returns {{mode: string, collapsed: boolean, logger: Console, timestamp: boolean}}
 */
const getParams = (options) => {
    return { ...{ collapsed, logger, timestamp, mode: 'standard' }, ...options };
};

/**
 * @param type
 * @param data
 * @param mode
 * @param logger
 */
const printByType = ({ type, name, data, mode, logger }) => {
    if (type === undefined) {
        type = getType(data);
    }
    if (name === undefined) {
        name = 'data';
    }
    const styles = `color: ${colors[mode]()}; font-weight: bold`;

    switch (type) {
        case 'array':
            logger.table(data);
            break;
        default:
            logger.log('%c ' + name + ':', styles, data);
            break;
    }
};

/**
 * @param params
 */
const printEnd = (params) => {
    params['logger'].groupEnd();
};

/**
 * @param title
 * @param styles
 * @param params
 */
const printTitle = (title, styles, params) => {
    if (params['collapsed'] === true) {
        params['logger'].groupCollapsed(`%c ${title}`, ...styles);
    } else {
        params['logger'].group(`%c ${title}`, ...styles);
    }
};

/**
 * @param data
 * @param options
 */
export const print = (data, options) => {
    if (debug) {
        const params = getParams(options);
        const type = getType(data);
        const { titleFormat, headerCSS } = getTitle(type, params['timestamp']);
        printTitle(titleFormat, headerCSS, params);
        printByType({ data, mode: params['mode'], logger: params['logger'] });
        printEnd(params);
    }
};

/**
 * @param settings
 * @param data
 * @param options
 */
export const promise = (settings, data, options) => {
    if (debug) {
        const params = getParams(options);
        const { titleFormat, headerCSS } = getTitle('Promise', params['timestamp']);
        printTitle(titleFormat, headerCSS, params);
        printByType({
            data: settings,
            name: 'settings',
            mode: 'standard',
            logger: params['logger'],
        });
        printByType({ data, mode: params['mode'], logger: params['logger'] });
        printEnd(params);
    }
};

/**
 * @param state
 * @param action
 * @param nextState
 * @param options
 */
export const reducer = ({ state, action, nextState }, options) => {
    if (debug) {
        const params = getParams(options);
        const { titleFormat, headerCSS } = getTitle(action.type, params['timestamp']);
        printTitle(titleFormat, headerCSS, params);
        printByType({ data: state, name: 'prev state', mode: 'info', logger: params['logger'] });
        printByType({ data: action, name: 'action', mode: 'standard', logger: params['logger'] });
        printByType({
            data: nextState,
            name: 'new state',
            mode: 'success',
            logger: params['logger'],
        });
        printEnd(params);
    }
};
