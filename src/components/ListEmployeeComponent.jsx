import React, {useEffect, useState} from 'react'
import { createEmployee, listEmployees} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';



const ListEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [render, setRender] = useState(false)
    const [employee, setEmployees] =  useState([])
    
    const navigator = useNavigate();
    // veri
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
            navigator('/employees')

        })
        setRender((prevRender) => !prevRender)
    }
    
    /*
    function saveOrUpdateEmployee(e){
        e.preventForm();
        
        if(validateForm()){
            const employee = {firstName,lastName}
            console.log(employee)
            if (id){
                updateEmployee(id,employee).then((response) =>{
                    console.log(response.data);
                    navigator('/employees');
                })
            } else{
                createEmployee(employee).then((response) => {
                    console.log(response.data);
        
                })
                setRender((prevRender) => !prevRender)
            }
        }
        

    }
*/

 /*   useEffect(()=> {
        if(id){
            getEmployee(id).then((response) =>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
            })
        }
    }) 
*/

/*
    function deleteEmployeeData(id) {
        deleteEmployee(id).then(() => {
            const filteredList = employeeList.filter(emp => emp.id !== id);
            setEmployeeList(filteredList);
        }).catch(error => {
            console.error("Silme işlemi başarısız oldu:", error);
        });
    }
    
    function updateEmployeeData(id) {
        const selectedEmp = employeeList.find(emp => emp.id === id);
        setSelectedEmployee(selectedEmp);
        setFirstName(selectedEmp.firstName); // İsim input alanına isim atanıyor
        setLastName(selectedEmp.lastName); // Soyisim input alanına soyisim atanıyor
    } 
    
    function deleteEmployeeData(id) {
        // Veritabanından çalışanı sil
        deleteEmployee(id).then(() => {
            console.log(`ID'si ${id} olan çalışan veritabanından silindi.`);
            // Tablodan çalışanı sil
            const updatedList = employeeList.filter(emp => emp.id !== id);
            setEmployeeList(updatedList);
        }).catch(error => {
            console.error(`ID'si ${id} olan çalışan silinirken bir hata oluştu:`, error);
        });
    } */


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
                              <button className='btn btn-info' onClick={() => saveOrUpdateEmployee(employee.id)}>Düzenle</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => deleteEmployeeData(employee.id)}>Sil</button>

                              </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent











/*
useEffect(()=> {
    if(id){
        getEmployee(id).then((response) =>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
        }).catch(error => {
            console.error(error);
        })
    }
}) */