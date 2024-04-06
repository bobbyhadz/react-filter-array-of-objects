import './App.css';

export default function App() {
  const employees = [
    {id: 1, name: 'Alice', country: 'Canada'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
    {id: 4, name: 'Dean', country: 'Germany'},
  ];

  // 👇️ Filter with 1 condition
  const filtered = employees.filter(employee => {
    return employee.country === 'Canada';
  });
  // 👇️ [{id: 1, name: 'Alice', country: 'Canada'},
  //     {id: 3, name: 'Carl', 'country: 'Canada'}]
  console.log(filtered);

  // 👇️ Filter with 2 conditions
  const filtered2 = employees.filter(employee => {
    return employee.country === 'Canada' && employee.id === 3;
  });

  // 👇️ [{id: 3, name: 'Carl', country: 'Canada'}]
  console.log('filtered2: ', filtered2);

  return (
    <div>
      {filtered.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
