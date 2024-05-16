import './TodoCounter.css';

function TodoCounter( { total, completed }) {
    return (
    <div id='counter'>
      <h1>
        Has completado <span class='completed-and-total'>{completed}</span> de <span class='completed-and-total'>{total}</span> TODOS
      </h1>
      </div>
    );
  }
  
  export { TodoCounter };