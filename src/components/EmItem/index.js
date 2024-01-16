import "./index.css";

const emItem = (props) => {
  const { details, onUpdate, onDelete } = props;
  const { id, name, age, experience, skills, doj, imageUrl, salary } = details;

  const deleteEmployee = () => {
    console.log(details.id);
    onDelete(details.id);
  };

  const updateEmployee = () => onUpdate(details.id, details.name);

  return (
    <tr>
      <td>{id.slice(0, 3)}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{experience}</td>
      <td>{skills}</td>
      <td>{doj}</td>
      <td>
        <img src={imageUrl} alt={name} className="photo" />
      </td>
      <td>{salary}</td>
      <td>
        <button type="button" onClick={deleteEmployee}>
          Delete
        </button>
      </td>
      <td>
        <button type="button" onClick={updateEmployee}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default emItem;
