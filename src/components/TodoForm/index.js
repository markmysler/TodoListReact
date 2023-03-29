import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodoValue.trim() !== '') {
            addTodo(newTodoValue)
            setOpenModal(false);
        }
    }
    return (
        <form
            onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar cebolla para la cena"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };