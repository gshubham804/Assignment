import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StudentData } from "../Context/StudentSlice";

const StudentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  const students = useSelector((state) => state?.students?.students);

  const [formData, setFormData] = useState({
    Name: students[id]?.Name || "",
    Email: students[id]?.Email || "",
    Phone: students[id]?.Phone || "",
    Marks: students[id]?.Marks || "",
    Pass: students[id]?.Pass.toString() || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = {
      ...students[id],
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      Marks: formData.Marks,
      Pass: formData.Pass,
    };
    const updatedStudents = students.map((student, index) =>
      index === Number(id) ? updatedStudent : student
    );
    dispatch(StudentData(updatedStudents));
    history("/");
  };

  return (
    <div>
      <h2>Edit Student</h2>
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

export default StudentForm;
