import {Button, Col, Input, Row, Select, Tag} from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions";
import {v4 as uuidv4} from "uuid";
import {useRef, useState} from "react";
import {todosRemainingSelector} from "../../redux/selectors";

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState("Medium");

    const dispatch = useDispatch();
    const todoNameRef = useRef();
    const todoList = useSelector(todosRemainingSelector);

    const handleAddClick = () => {
        dispatch(addTodo({
            id: uuidv4(), name: todoName, priority: priority,
        }));
        setTodoName("");
        setPriority("Medium");

        todoNameRef.current.focus();
    }

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    }

    const handlePriorityChange = (value) => {
        setPriority(value);
    }

    return (<Row style={{height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                {todoList.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />)}
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input ref={todoNameRef} value={todoName} onChange={handleInputChange}/>
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>);
}
