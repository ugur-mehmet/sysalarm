Template.logsTable.helpers({
  tableSettings: function(){
    return {
      rowsPerPage: 20,
      showFilter: true,
      fields: [
      { key: 'text', label: 'Alarm Text' },
      { key: 'place', label: 'Location' },
      { key: 'status', label: 'Status' },
      { key: 'mod_date', label: 'Time',sort: 'descending'}
      ]


    };
  }
});
