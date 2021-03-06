import React, { FC, ReactElement } from "react";
import { Search } from "../search/Search";
import { observer } from "mobx-react-lite";
import { If } from "../if-operator/If";
import {
  NavToggleButton,
} from "../app-menu-buttons/app-menu-buttons";
import { AppBar } from "../app-bar/AppBar";
import { useRouter } from "../../stores/RouterStore";
import { useAppSearch } from "../../mobx__entry/SharedPageMobxEntry";
import { AppLogoSvgIcon } from "../icon__svg-icon/svg-icons";
import { Link } from "gatsby";
import { RouterUtils } from "../../utils/router-utils";
import { TemporarySearch } from "../search__temporary/TemporarySearch";


interface IAppHeaderProps {
}

export const AppHeader: FC<IAppHeaderProps> = observer(( {...props} ) => {
  let appSearch = useAppSearch();
  let router = useRouter();


  return (
    <header className="app-header app-header-grid" app-search-toggle={appSearch.active.state}>
      <div className="app-header-grid-item__nav-toggle">
        <NavToggleButton/>
      </div>
      <div className="app-header-grid-item__logo">
        <Link to={RouterUtils.appRoutes.getIndexRoute({})}>
          <AppLogoSvgIcon className="app-logo__svg-icon" />
        </Link>
      </div>
      <div className="app-header-grid-item__informer">
      </div>
      <div className="app-header-grid-item__search">
        <TemporarySearch/>
      </div>
      <div className="app-header-grid-item__menu">
        <AppBar/>
      </div>
    </header>
  );
});

