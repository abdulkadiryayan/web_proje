import React, {useEffect, useState} from 'react'
import { createEmployee, listEmployees, deleteEmployee} from '../services/EmployeeService'


const ListEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [render, setRender] = useState(false)
    const [employee, setEmployees] =  useState([])


    const handleDelete = (id) => {
        deleteEmployee(id)
          .then(() => {
            console.log(`ID'si ${id} olan çalışan veritabanından silindi.`);
            setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
          })
          .catch(error => {
            console.error(`ID'si ${id} olan çalışan silinirken bir hata oluştu:`, error);
          });
      }; 
    
    // 1 veri geriden geliyor burası.
    useEffect (() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [render])


    function saveEmployee(e){
        e.preventDefault 
        const employee = {firstName, lastName}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);

        }) 
        setRender((prevRender) => !prevRender)
    }
 

    const handleEdit = (id) => {
        const employeeToEdit = employee.find((emp) => emp.id === id);
        if (employeeToEdit) {
            setFirstName(employeeToEdit.firstName);
            setLastName(employeeToEdit.lastName);
            setEditingEmployeeId(id);
        }
    };
    


  return (
    <div className='container'>

        <h2 className='text-center'>başlık</h2>
        <label className='form-label'> </label>
        <input 
            type="text"
            placeholder=' isim girin: '
            name = 'firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <label className='form-label'> </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input 
            type="text" 
            placeholder=' soyisim girin: ' 
            name = 'lastName'
            value = {lastName}
            onChange={(e) => setLastName(e.target.value)}
        />

        <button className ='btn btn-secondary' onClick={saveEmployee} > Kaydet </button>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th className='text-center'> id </th>
                <th className='text-center'> isim </th>
                <th className='text-center'> soyisim </th>
                <th className='text-center'> işlem </th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee =>
                        <tr key = {employee.id}>
                              <td>{employee.id}</td>
                              <td>{employee.firstName}</td>
                              <td>{employee.lastName}</td>
                              <td>
                              <button className='btn btn-info' onClick={() => handleEdit(employee.id)}>Düzenle</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(employee.id)}>Sil</button>

                              </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

