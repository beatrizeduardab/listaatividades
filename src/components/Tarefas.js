import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Tarefas = () => {
  const [tarefasPendentes, setTarefasPendentes] = useState(["Estudar React"]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const [notificacao, setNotificacao] = useState("");

  const concluirTarefa = (index) => {
    const tarefaConcluida = tarefasPendentes.splice(index, 1);
    setTarefasConcluidas([...tarefasConcluidas, ...tarefaConcluida]);
    setTarefasPendentes([...tarefasPendentes]);
    setNotificacao("Tarefa concluída com sucesso!");
  };

  const adicionarTarefa = (novaTarefa) => {
    setTarefasPendentes([...tarefasPendentes, novaTarefa]);
    setNotificacao("Tarefa adicionada com sucesso!");
  };

  return (
    <Container>
      <Card>
        <Title>Tarefas</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            adicionarTarefa(e.target.elements.novaTarefa.value);
            e.target.reset();
          }}
        >
          <Input
            type="text"
            name="novaTarefa"
            placeholder="Nova tarefa"
            required
          />
          <Button type="submit">Adicionar</Button>
        </Form>
        {notificacao && <p>{notificacao}</p>}
        <ul>
          {tarefasPendentes.map((tarefa, index) => (
            <li key={index}>
              {tarefa}{" "}
              <Button onClick={() => concluirTarefa(index)}>Concluir</Button>
            </li>
          ))}
        </ul>
        <h2>Tarefas Concluídas</h2>
        <ul>
          {tarefasConcluidas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default Tarefas;