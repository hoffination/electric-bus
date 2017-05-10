import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import States from '../../data/dataset'

const styles = {
    customWidth: {
        fontSize: '1.7em'
    },
};

export default class StateSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateList: Object.keys(States).sort()
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this)
    }

    handleSelectionChange (event, index, selection) {
        this.props.onChange(selection)
    }

    render () {
        return (
            <SelectField
                floatingLabelText="State Selector"
                value={this.props.selection}
                onChange={this.handleSelectionChange}
                style={styles.customWidth}
            >
            {this.state.stateList.map((param, index) => {
                return (
                    <MenuItem key={index} value={param} primaryText={param} />
                )
            })}
            </SelectField>
        )
    }
}