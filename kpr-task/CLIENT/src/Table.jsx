const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
        
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td id="des">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
