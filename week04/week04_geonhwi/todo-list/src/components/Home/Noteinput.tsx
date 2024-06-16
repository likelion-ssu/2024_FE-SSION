import React, { useState } from "react";
import styled from "styled-components";
import { NoteType } from "../../hooks/useNotes";

interface NoteInputProps {
  addNote: (note: Omit<NoteType, "id" | "date">) => void;
  onCancel: () => void;
}

const NoteInput = ({ addNote, onCancel }: NoteInputProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = new Date();
    addNote({
      title,
      content,
      createdAt: now,
      updatedAt: now,
      bookmarked: false,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <ButtonWrapper>
        <Button type="submit">일정 생성</Button>
        <CancelButton type="button" onClick={onCancel}>
          리스트
        </CancelButton>
      </ButtonWrapper>
    </Form>
  );
};

export default NoteInput;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 7rem;
`;

const Input = styled.input`
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  height: 28rem;
  padding: 2rem 0 8rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  width: 48%;
  height: 7rem;
  border: none;
  background-color: lightgray;
  font-size: 3rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const CancelButton = styled(Button)`
  background-color: lightgrey;

  &:hover {
    background-color: grey;
  }
`;
