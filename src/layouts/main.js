import React, {Component} from 'react';
import _ from 'lodash';
import Meta from '../pages/components/meta'
import KCHamburgerMenu from '../pages/components/menu/KCHamburgerMenu';
import KCHeader from '../pages/components/KCHeader';

export default class Main extends Component {
    static get defaultProps() {
        return {
            onOpenMenu: _.noop
        }
    }

    constructor() {
        super();
        this.state = {
            isMenuOpen: false,
            isBurgerOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
            isBurgerOpen: !this.state.isBurgerOpen
        });
    };

    render() {
        return <div className="mainContainer app">
            <KCHamburgerMenu
                isOpen={this.state.isMenuOpen}/>
            <KCHeader
                onToggleMenu={this.toggleMenu}
            />
            <Meta />
            { this.props.children }
        </div>
    }

}