import { Task } from "./Task";
import { useState } from "react";
import './Todo.css';


export function Todo() {
    const tasks = [
        {
            title: 'Lavar ropa',
            description: 'lavar ropa antes de que llueva',
            imgUrl: 'https://images.unsplash.com/photo-1582735689283-7b70dbe630ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
        },
        {
            title: 'Hacer tarea',
            description: 'Hacer tarea para mañana lunes',
            imgUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHRhcmVhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
        },
        {
            title: 'Terminar proyecto',
            description: 'Terminar proyecto para el viernes',
            imgUrl: 'https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1303&q=80'
        }
    ]

    const [tasksState, setTasksState] = useState(tasks)

    const [titleState, setTitleState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')
    const [imgUrlState, setImgUrlState] = useState('')

    function handleSubmit(e) {
        e.preventDefault()


        const tasksStateClone = [...tasksState]
        tasksStateClone.push({
            title: titleState,
            description: descriptionState,
            imgUrl: imgUrlState,
        })

        setTasksState(tasksStateClone)
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="nav_principal">
            <div className="nav_1">
                <label htmlFor="title" className="label_titulo"></label>
                <input onChange={(e)=>setTitleState(e.target.value)} name="title" className="input_titulo" placeholder="Titulo:"></input>
            </div>
            <div className="nav_2">
                <label htmlFor="description" className="label_descripcion"></label>
            <input onChange={(e)=>setDescriptionState(e.target.value)} name="description" className="input_descripcion" placeholder="Descripción:"></input>
            </div>
            <div className="nav_3">
            <label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Agregar Imagen</span>
   </div>
   <input onChange={(e)=>setImgUrlState(e.target.value)} type="file" accept="image/*" id="file" name="file" className="input_file"></input>
</label>

            </div>
            <div className="nav_4">
                <button type="submit" className="agregar_tarea">Agregar tarea</button>
            </div>
            
        </form>
        <section className="tasks">
        <div className="task_list">
            {tasksState.map((task, index) => {
                return <Task key={index} task={task}></Task>
            })}
        </div>
        </section>
        </>
    )
}