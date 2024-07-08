import { FilePenLine } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FilePenLine className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
