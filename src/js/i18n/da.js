﻿(function(){
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('da', {
        aggregate:{
          label: 'artikler'
        },
        groupPanel:{
          description: 'Grupér rækker udfra en kolonne ved at trække dens overskift hertil.'
        },
        search:{
          placeholder: 'Søg...',
          showingItems: 'Viste rækker:',
          selectedItems: 'Valgte rækker:',
          totalItems: 'Rækker totalt:',
          size: 'Side størrelse:',
          first: 'Første side',
          next: 'Næste side',
          previous: 'Forrige side',
          last: 'Sidste side'
        },
        menu:{
          text: 'Vælg kolonner:'
        },
        column: {
          hide: 'Skjul kolonne'
        },
        aggregation: {
          count: 'samlede rækker: ',
          sum: 'smalede: ',
          avg: 'gns: ',
          min: 'min: ',
          max: 'max: '
        },
        gridMenu: {
          columns: 'Columns:',
          exporterAllAsCsv: 'Export all data as csv',
          exporterVisibleAsCsv: 'Export visible data as csv',
          exporterSelectedAsCsv: 'Export selected data as csv',
          exporterAllAsPdf: 'Export all data as pdf',
          exporterVisibleAsPdf: 'Export visible data as pdf',
          exporterSelectedAsPdf: 'Export selected data as pdf',
        }
        });
      return $delegate;
    }]);
  }]);
})();