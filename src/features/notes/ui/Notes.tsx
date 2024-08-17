import { ChangeEvent, FC } from 'react';
import { Textarea } from '@mantine/core';
import { useAppStore } from "../../../app/store";

export const Notes: FC = () => {
  const { notes, setNotes } = useAppStore();

  return (
      <Textarea
        label="Notes"
        value={notes}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
      />
  );
};
