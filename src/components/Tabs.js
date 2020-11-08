import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label, // state array for the active tab, its selects the first by default
        };
    }

    onClickTabItem = tab => {
        // onclick function for the tabs to set the active tab and display the elements of the tabs
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab },
        } = this; // JavaScript es6 distructuring syntax for everything in "this"

        return (
            <div>
                <ol className='tab-list'>
                    {children.map(child => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className='tab-content'>
                    {children.map(child => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
