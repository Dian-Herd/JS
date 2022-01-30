class Table{
    constructor(table){
      this.table = table;
    }
    // method
    render(select){
      const t = document.createElement('table');
      t.classList.add('table', 'table-striped', 'text-center');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      t.appendChild(thead);
      t.appendChild(tbody);
      const tr = document.createElement('tr');
      thead.appendChild(tr);
      // pengulangan menangkap columns
      this.table.columns.forEach(function(column){
        const th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = column;
      })
      // pengulangan menangkap data
      for(let i = 0; i < this.table.data.length; i++){
        const tr = document.createElement('tr');
        tbody.append(tr);
        for(let j = 0; j < this.table.data[i].length; j++){
          const td = document.createElement('td');
          tr.appendChild(td);
          td.innerHTML = this.table.data[i][j];
        }
      }
      select.appendChild(t);
    }
}

export { Table };