import { useContext } from "react";
import todosContext from "./todosContext";

export default function useTodosContext(){
    return useContext(todosContext)
}