import styled from "styled-components";
import Note from "./Note";

interface NoteType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  bookmarked: boolean;
}

interface NoteListProps {
  notes: NoteType[];
  onEditNote: (id: string, newTitle: string, newContent: string) => void;
  onDeleteNote: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onAddNewNote: () => void;
}

const NoteList = ({
  notes,
  onEditNote,
  onDeleteNote,
  onToggleBookmark,
  onAddNewNote,
}: NoteListProps) => {
  return (
    <ListWrapper>
      <List>
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            bookmarked={note.bookmarked}
            onEdit={(newTitle, newContent) =>
              onEditNote(note.id, newTitle, newContent)
            }
            onDelete={() => onDeleteNote(note.id)}
            onToggleBookmark={() => onToggleBookmark(note.id)}
          />
        ))}
      </List>
      <AddButton onClick={onAddNewNote}>일정 추가</AddButton>
    </ListWrapper>
  );
};

export default NoteList;

const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  max-height: 50rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  width: 72.5rem;
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
