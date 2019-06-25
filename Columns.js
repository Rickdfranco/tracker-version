
const Columns = [
    {
        Header: 'User',
        accessor: 'userId',
        sortable: false,
        id: 'userId',
        show: true,
    },
    {
        Header: 'Seriel ID',
        accessor: 'serielNumber',
        sortable: false,
        id: 'serielId',
        show: true,
    },
    {
        Header: 'Manufacturer',
        accessor: 'manufacturer',
        sortable: false,
        id: 'manufacturer',
    },
    {
        Header: 'Model',
        accessor: 'model',
        sortable: false,
        id: 'model',
    },
    {
        Header: 'Operating System',
        accessor: 'operatingSystem',
        sortable: false,
        id: 'operatingSystem',
    },
    {
        Header: 'IP Adress',
        accessor: 'lastKnownIp',
        sortable: false,
        id: 'lastKnownIp',
    },
    {
        Header: 'Mac Adress',
        accessor: 'mac',
        sortable: false,
        id: 'mac',
    },
];

export default Columns;