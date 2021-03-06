/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// require( './src/styles/main-scrollbar.scss' );

import "./src/styles_entries/global.scss";

import React from 'react';
import { MobxSharedContext } from './src/react__context/MobxSharedContext';
import { SharedPageMobxEntry } from './src/mobx__entry/SharedPageMobxEntry';
import { AppDriverInitializationStateType } from './src/consts/AppDriverInitializationStateType';

/// TODO: [WARNING][ERROR WITH MULTI LANGUAGE]
/// TODO: [refactoring][extract to utils]
const isIndexPage = () => {
    let pathname = window.location.pathname;

    return pathname === `/typescript-definitive-guide/` || pathname === `/`;
}



export const wrapRootElement = ({ element }) => {
    let sharedMobxParams = {
        appDriverComputedInitialStateType: isIndexPage() ?
            AppDriverInitializationStateType.Close :
            AppDriverInitializationStateType.Auto
    };


    return (
        <MobxSharedContext.Provider value={ SharedPageMobxEntry.getInstance(sharedMobxParams) }>
            { element }
        </MobxSharedContext.Provider>
    );
};

// export const wrapPageElement = ( { element, props } ) => {
//   return (
//       <SharedPage {...props}>
//           {element}
//       </SharedPage>
//   );
// };
export const shouldUpdateScroll = ({routerProps:{location}}) => {
    if (location.hash === ``) {
        window.scrollTo(0, 0);
    }

    return false;
};
export const onRouteUpdate = ( { location: { hash } } ) => {
};

export const onPreRouteUpdate = ({ location: { hash } }) => {

}
