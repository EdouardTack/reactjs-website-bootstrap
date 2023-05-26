import { lazy } from 'react';

export function getComponent(path) {
    return lazy(() => import(path).then((module) => {
        return { default: module.default };
    }));
}
