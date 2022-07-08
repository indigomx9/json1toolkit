import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const TaskList = () => {
    const dispatch = useDispatch();
    const { loading, error, tasks } = 
        useSelector((state) => state.tasks);
    
    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>

    return (
        <React.Fragment>
            {tasks.map((task) => (
                <main key={task.id}>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


