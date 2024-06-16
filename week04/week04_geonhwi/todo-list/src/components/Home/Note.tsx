import { useState } from "react";
import styled from "styled-components";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface NoteProps {
  title: string;
  content: string;
  bookmarked: boolean;
  onEdit: (newTitle: string, newContent: string) => void;
  onDelete: () => void;
  onToggleBookmark: () => void;
}

const Note = ({
  title,
  content,
  bookmarked,
  onEdit,
  onDelete,
  onToggleBookmark,
}: NoteProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleSave = () => {
    onEdit(newTitle, newContent);
    setIsEditing(false);
  };

  return (
    <NoteCard>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <ButtonGroup>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <NoteTitle>{title}</NoteTitle>
          <NoteContent>{content}</NoteContent>
          <ButtonGroup>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={onDelete}>Delete</Button>
            <BookmarkButton onClick={onToggleBookmark} bookmarked={bookmarked}>
              {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
            </BookmarkButton>
          </ButtonGroup>
        </>
      )}
    </NoteCard>
  );
};

export default Note;

const NoteCard = styled.div`
  padding: 1rem;
  margin-bottom: 0.3rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const NoteTitle = styled.h3`
  margin-bottom: 0.3rem;
  font-size: 2.5rem;
  color: red;
`;

const NoteContent = styled.p`
  font-size: 3rem;
  color: blue;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  width: 100%;
  height: 3rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  width: 100%;
  height: 6rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  background-color: lightgray;
  font-size: 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const BookmarkButton = styled(Button)<{ bookmarked: boolean }>`
  background-color: ${({ bookmarked }) => (bookmarked ? "gray" : "lightgray")};

  &:hover {
    background-color: ${({ bookmarked }) => (bookmarked ? "darkgray" : "gray")};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
