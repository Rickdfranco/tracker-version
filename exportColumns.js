import React, { Component } from 'react'

class exportColumns extends Component {

    constructor(props) {
        super(props);
    }
    static deleteRow(id) {
        alart('Deleting the record wiith id:' + id)
    }

    static showMessage(data) {
        alert('Showing the message:' + JSON.stringify(data))
    }

    static columnsArray() {
        return [
            {
                Header: 'User',
                accessor: 'userId',
                filterable: true,
                style: {
                    textAlign: 'center',
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'Location',
                accessor: 'location',
                filterable: true,
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'serielId',
                accessor: 'serielNumber',
                filterable: true,
                style: {
                    textAlign: 'center',
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'Manufacturer',
                accessor: 'manufacturer',
                filterable: true,
                style: {
                    textAlign: 'center',
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'Model',
                accessor: 'manufacturer',
                filterable: true,
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'Operating System',
                accessor: 'manufacturer',
                filterable: true,
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true
            },
            {
                Header: 'IP Adress',
                accessor: 'ipAdress',
                filterable: true,
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true,
            },
            {
                Header: 'macAdress',
                accessor: 'ipAdress',
                filterable: true,
                style: {
                    textAlign: 'center'
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                show: true,
            }
        ]
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default exportColumns;