import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StudentData } from "../Context/StudentSlice";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Marks: "",
    Pass: "",
  });
  const history = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length,
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      Marks: formData.Marks,
      Pass: formData.Pass,
    };
    dispatch(StudentData([...students, newStudent]));
    history("/");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            required
            type="text"
            id="phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="marks">Marks:</label>
          <input
            required
            type="text"
            id="marks"
            name="Marks"
            value={formData.Marks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pass">Pass:</label>
          <input
            required
            type="text"
            id="pass"
            name="Pass"
            value={formData.Pass}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default CreateStudent;
