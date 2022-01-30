import { Table } from './module.js';

// pemanggilan class
new Table({
  columns: ['Nama', 'Email', 'No. Telpon'],
  data: [
    ['Dian', 'dian@gmail.com', '0111'],
    ['Herdiana', 'herdiana@gmail.com', '0222'],
    ['Naid', 'naid@gmail.com', '0333'],
    ['Anaidreh', 'anaidreh@gmail.com', '0444']
  ]
}).render(document.getElementById('wrapper'));